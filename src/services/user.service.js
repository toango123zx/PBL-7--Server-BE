import { prisma } from '../database'

export const getUser = async (id_user, username, email) => {
    try {
        let __properties = [
            {
                id_user: id_user,
            },
            {
                username: username,
            },
            {
                email: email,
            },
        ]
        return await prisma.user.findFirst({
            select: {
                id: true,
                username: true,
                password: true,
                name: true,
                gender: true,
                dateOfBirth: true,
                salt: true,
                Role: {
                    select: {
                        name: true,
                    },
                },
                status: true,
            },
            where: {
                OR: __properties,
                NOT: {
                    status: false,
                },
            },
        })
    } catch (error) {
        throw Error(error)
    }
}

export const createUser = async (user) => {
    try {
        return await prisma.user.create({
            data: user,
        })
    } catch (error) {
        throw Error(error)
    }
}
