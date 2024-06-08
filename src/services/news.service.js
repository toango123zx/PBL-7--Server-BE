import { prisma } from '../database'
import { dateUtils } from '../utils'

export const getNews = async (categoryId, date) => {
    console.log(categoryId, date)
    try {
        return await prisma.news.findMany({
            where: {
                AND: [
                    { categoryId: categoryId },
                    {
                        date: {
                            gte: date,
                            lt: dateUtils.getNextDate(date),
                        },
                    },
                ],
            },
            orderBy: {
                redirectCount: 'desc',
            },
        })
    } catch (e) {
        return false
    }
}
