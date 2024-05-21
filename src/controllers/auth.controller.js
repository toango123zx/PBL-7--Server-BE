import { userService } from "../services";
import * as seed from '../database/seeds'

export const login = async(req, res, next) => {
    const { username, password } = req.body;
    const user = await userService.getUser(undefined, username);
    console.log("🚀 ~ login ~ req.body:", username)
    console.log("🚀 ~ login ~ user:", user)
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json({
        id: user.id,
    });
}

export const test = async(req, res, next) => {
    return res.status(200).json({ message: 'Test successful' });
}

export const userRegister = async(req, res, next) => {
    const __user = req.user;
    console.log("🚀 ~ userRegister ~ __user:", __user)

    if (!(userService.createUser(__user))) {
        return res.status(500).json({
            position: "insert prisma",
            msg: "Unable to add user table data to the database",
        });
    }

    return res.sendStatus(200);
}

export const seedData = async(req, res, next) => {
    try {
        seed.main()
    } catch (e) {
        return res.status(500).json({
            position: "seeding",
            msg: "Error from the server",
        });
    }
    return res.sendStatus(200);
}