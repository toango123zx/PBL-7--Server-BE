import { prisma } from '../database//index'

export const createRoom = async (idUser) => {
    return await prisma.chatRoom.create({
        data: {
            name: 'New Chat',
            User: {
                connect: {
                    id: String(idUser),
                },
            },
        },
    })
}

export const createMessage = async (idRoom, message) => {
    return await prisma.messenge.create({
        data: {
            content: String(message),
            ChatRoom: {
                connect: {
                    id: String(idRoom),
                },
            },
        },
    })
}
