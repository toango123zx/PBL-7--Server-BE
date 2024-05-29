import { prisma } from '../index'

export const categoriesSeed = async () => {
    const categories = [
        {
            name: 'Kinh tế',
            Source: {
                connect: {
                    name: 'VTV',
                },
            },
        },
        {
            name: 'Xã hội',
            Source: {
                connect: {
                    name: 'VTV',
                },
            },
        },
        {
            name: 'Kinh doanh',
            Source: {
                connect: {
                    name: 'TuoiTre',
                },
            },
        },
        {
            name: 'Công nghệ',
            Source: {
                connect: {
                    name: 'TuoiTre',
                },
            },
        },
        {
            name: 'Du lịch',
            Source: {
                connect: {
                    name: 'TuoiTre',
                },
            },
        },
        {
            name: 'Văn hóa',
            Source: {
                connect: {
                    name: 'TuoiTre',
                },
            },
        },
        {
            name: 'Giải trí',
            Source: {
                connect: {
                    name: 'TuoiTre',
                },
            },
        },
        {
            name: 'Thể thao',
            Source: {
                connect: {
                    name: 'TuoiTre',
                },
            },
        },
        {
            name: 'Giáo dục',
            Source: {
                connect: {
                    name: 'TuoiTre',
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
