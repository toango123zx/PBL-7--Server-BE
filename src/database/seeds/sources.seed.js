import { prisma } from '../index'

export const sourcesSeed = async () => {
    const sources = [
        {
            name: 'vtv',
        },
        {
            name: 'tuoitre',
        },
    ]

    for (let source of sources) {
        await prisma.source.create({
            data: source,
        })
    }

    console.log('Sources seeded successfully')
}
