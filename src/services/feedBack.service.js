import { prisma } from '../database//index'

export const getFeedBack = async (take, page) => {
    try {
        return await prisma.feedBack.findMany({
            select: {
                id: true,
                News: {
                    select: {
                        id: true,
                        date: true,
                        summary: true,
                        url: true,
                        status: true,
                    },
                },
                User: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        status: true,
                    },
                },
                createdAt: true,
                content: true,
                status: true,
            },
            where: {
                status: 'PENDING',
            },
            skip: Number(Number(take) * (Number(page) - 1)),
            take: Number(take),
        })
    } catch (error) {
        throw new Error(error)
    }
}

export const createFeedBack = async (userId, newsId, content) => {
    try {
        return await prisma.feedBack.create({
            data: {
                userId: String(userId),
                newsId: String(newsId),
                content: String(content),
            },
        })
    } catch (e) {
        throw new Error(e)
    }
}

export const updateStatusFeedBack = async (feedBackID, status) => {
    try {
        if (!(status == 'APPROVED' || status == 'REJECTED')) {
            throw Error('Status')
        }
        return prisma.feedBack.update({
            data: {
                status: String(status),
            },
            where: {
                id: String(feedBackID),
                status: 'PENDING',
            },
        })
    } catch (error) {
        throw new Error(error)
    }
}
