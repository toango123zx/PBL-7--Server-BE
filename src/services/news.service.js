import { prisma } from '../database'

export const getNews = async (categoryId, date) => {
    console.log(categoryId, date)
    try {
        return await prisma.news.findMany({
            where: {
                AND: [{ categoryId: categoryId }, { Date: date }],
            },
            orderBy: {
                redirectCount: 'desc',
            },
        })
    } catch (e) {
        return false
    }
}
