import { prisma } from '../database'

export const getModel = async (name) => {
    try {
        return await prisma.modelVersion.findFirst({
            where: {
                name: name
            }
        })
    } catch (error) {
        throw Error(error)
    }
}

export const createModel = async (name, rouge1, rouge2, rougeL) => {
    try {
        return await prisma.modelVersion.create({
            data: {
                name: String(name),
                rouge1: Number.parseFloat(rouge1),
                rouge2: Number.parseFloat(rouge2),
                rougeL: Number.parseFloat(rougeL),
            }
        })
    } catch (error) {
        throw Error(error)
    }
}