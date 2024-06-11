import { authHelper } from '../helpers'

export const createUser = async (req, res, next) => {
    const __user = {
        username: req.body.username.replace(/\s/g, ''),
        password: '',
        name: req.body.name,
        email: req.body.email,
        gender: Boolean(req.body.gender),
        dateOfBirth: new Date(req.body.dateOfBirth),
        salt: '',
    }
    if (req.body.role && !(req.body.role === 'user')) {
        __user.role = req.body.role
    }

    const { __salt, __hashedPassword } = authHelper.hash.hashPassword(
        req.body.password,
    )

    __user.salt = __salt
    __user.password = __hashedPassword

    req.user = __user
    next()
}

export const verifyToken = (req, res, next) => {
    const __token = req.headers.authorization
    if (!__token) {
        return res.status(401).json({
            position: 'Token or refreshToken does not exist',
            msg: "You're not authenticated",
        })
    }

    const verify = authHelper.jwt.verifyToken(__token.split(' ')[1])
    if (verify.error) {
        switch (verify.error.name) {
            case undefined:
                break
            case 'TokenExpiredError':
                return res.status(403).json({
                    position: 'Token expire',
                    msg: 'Expired token require a request to reissue the token',
                })
            case 'TokenNotInitializedError':
                return res.status(403).json({
                    position: 'refresh token does not exist',
                    msg: 'The user is not logged into the system',
                })
            default:
                return res.status(403).json({
                    position: 'Incorrect token',
                    msg: 'Incorrect token',
                })
        }
    } else {
        delete verify.data.iat
        delete verify.data.exp
        req.user = verify.data
        next()
    }
}

export const checkAdminRole = async (req, res, next) => {
    if (req.user.Role.name === 'admin') {
        return next()
    }
    return res.status(403).json({
        position: 'User role is not accessible',
        msg: 'Users need site administrator permissions to access this resource',
    })
}
