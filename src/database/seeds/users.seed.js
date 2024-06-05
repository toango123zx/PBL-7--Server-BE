import { prisma } from '../index'

export const usersSeed = async () => {
    const users = [
        {
            username: 'admin',
            password: "e67aea41a82deac1bc8ac813931cd81eb945237e5565d0137b1b58848df3c104b09871b1e10fcf33a4b28d9105c75e700053d9a9aed8c9d501c8db61993aded6", //admin
            name: 'admin',
            dateOfBirth: new Date(),
            gender: true,
            email: 'admin@gmail.com',
            salt: '97f1408723bb64a52bf3326a47b4e0a5',
            Role: {
                connect: {
                    name: 'admin',
                },
            },
        },
        {
            username: 'user',
            password: "e67aea41a82deac1bc8ac813931cd81eb945237e5565d0137b1b58848df3c104b09871b1e10fcf33a4b28d9105c75e700053d9a9aed8c9d501c8db61993aded6", //admin
            name: 'user',
            dateOfBirth: new Date(),
            gender: true,
            email: 'user@gmail.com',
            salt: '97f1408723bb64a52bf3326a47b4e0a5',
            Role: {
                connect: {
                    name: 'user',
                },
            },
        },
        {
            username: 'chatbot version 1.0',
            password: "e67aea41a82deac1bc8ac813931cd81eb945237e5565d0137b1b58848df3c104b09871b1e10fcf33a4b28d9105c75e700053d9a9aed8c9d501c8db61993aded6", //admin
            name: 'chatbot',
            dateOfBirth: new Date(),
            gender: true,
            email: 'chatbot@gmail.com',
            salt: '97f1408723bb64a52bf3326a47b4e0a5',
            Role: {
                connect: {
                    name: 'chatbot',
                },
            },
        },
    ]

    for (let i = 1; i < 400; i++) {
        users.push(
            {
                username: `admin${i}`,
                password: "e67aea41a82deac1bc8ac813931cd81eb945237e5565d0137b1b58848df3c104b09871b1e10fcf33a4b28d9105c75e700053d9a9aed8c9d501c8db61993aded6", //admin
                name: `admin${i}`,
                dateOfBirth: new Date(),
                gender: true,
                email: `admin${i}@gmail.com`,
                salt: '97f1408723bb64a52bf3326a47b4e0a5',

                Role: {
                    connect: {
                        name: `admin`,
                    },
                },
            },
            {
                username: `user${i}`,
                password: "e67aea41a82deac1bc8ac813931cd81eb945237e5565d0137b1b58848df3c104b09871b1e10fcf33a4b28d9105c75e700053d9a9aed8c9d501c8db61993aded6", //admin
                name: `user${i}`,
                dateOfBirth: new Date(),
                gender: true,

                salt: '97f1408723bb64a52bf3326a47b4e0a5',
                email: `user${i}@gmail.com`,
                Role: {
                    connect: {
                        name: `user`,
                    },
                },
            },
        )
    }
    for (let user of users) {
        await prisma.user.create({
            data: user,
        })
    }
    console.log('Users seeded successfully')
}
