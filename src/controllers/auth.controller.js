import { userService } from '../services'
import * as seed from '../database/seeds'
import { authHelper } from '../helpers'

export const login = async (req, res, next) => {
    const __username = req.body.username.replace(/\s/g, '');
    const __password = req.body.password;

    const __user = await userService.getUser(undefined, __username, "", "");
    if (__user === false) {
        return res.status(500).json({
            position: "Prisma query User",
            msg: "Error from the server"
        });
    };
    if (__user === null) {
        return res.status(404).json({
            position: "username",
            msg: "username does not exist"
        });
    };
    if (!(authHelper.hash.comparePassword(__user.password, __user.salt, __password))) {
        return res.status(401).json({
            position: "password",
            msg: "Invalid password",
        });
    };

    delete __user.password;
    delete __user.salt;

    const { __token } = authHelper.jwt.createSignInToken(__user);

    return res.status(200).json({
        data: __user,
        token: __token
    });
};


export const test = async (req, res, next) => {
    return res.status(200).json({ message: 'Test successful' })
}

export const userRegister = async (req, res, next) => {
    const __user = req.user
    console.log('🚀 ~ userRegister ~ __user:', __user)

    if (!userService.createUser(__user)) {
        return res.status(500).json({
            position: 'insert prisma',
            msg: 'Unable to add user table data to the database',
        })
    }

    return res.sendStatus(200)
}

export const seedData = async (req, res, next) => {
    try {
        seed.main()
    } catch (e) {
        return res.status(500).json({
            position: 'seeding',
            msg: 'Error from the server',
        })
    }
    return res.sendStatus(200)
}
