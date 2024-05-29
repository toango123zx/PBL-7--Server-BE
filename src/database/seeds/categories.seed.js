import { prisma } from '../index'

export const categoriesSeed = async () => {
    const categories = [
        {
            name: 'Kinh tế',
            Source: {
                connect: {
                    name: 'vtv',
                },
            },
        },
        {
            name: 'Xã hội',
            Source: {
                connect: {
                    name: 'vtv',
                },
            },
        },
        {
            name: 'Kinh doanh',
            Source: {
                connect: {
                    name: 'tuoitre',
                },
            },
        },
        {
            name: 'Công nghệ',
            Source: {
                connect: {
                    name: 'tuoitre',
                },
            },
        },
        {
            name: 'Du lịch',
            Source: {
                connect: {
                    name: 'tuoitre',
                },
            },
        },
        {
            name: 'Văn hóa',
            Source: {
                connect: {
                    name: 'tuoitre',
                },
            },
        },
        {
            name: 'Giải trí',
            Source: {
                connect: {
                    name: 'tuoitre',
                },
            },
        },
        {
            name: 'Thể thao',
            Source: {
                connect: {
                    name: 'tuoitre',
                },
            },
        },
        {
            name: 'Giáo dục',
            Source: {
                connect: {
                    name: 'tuoitre',
                },
            },
        },
    ]

    for (let category of categories) {
        await prisma.category.create({
            data: category,
        })
    }

    console.log('Categories seeded successfully')
}
