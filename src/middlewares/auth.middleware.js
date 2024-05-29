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
