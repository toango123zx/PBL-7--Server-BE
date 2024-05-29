import { prisma } from '../database'

export const getAllSources = async () => {
    try {
        return await prisma.source.findMany()
    } catch (e) {
        return false
    }
}
