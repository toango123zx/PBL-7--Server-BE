import { prisma } from '../database'

export const getCategoriesBySourceId = async (sourceId) => {
    try {
        return await prisma.category.findMany({
            where: {
                sourceId: String(sourceId),
            },
        })
    } catch (e) {
        return false
    }
}
