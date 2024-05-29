const { prisma } = require('../index')

export const permissionsSeed = async () => {
    const permissions = [
        {
            name: 'viewMyProfile',
            description: 'View my profile',
            Role: {
                connect: [
                    {
                        name: 'admin',
                    },
                    {
                        name: 'user',
                    },
                ],
            },
        },
        {
            name: 'viewListUser',
            description: 'View all users',
            Role: {
                connect: [
                    {
                        name: 'admin',
                    },
                ],
            },
        },
        {
            name: 'searchUser',
            description: 'Search users',
            Role: {
                connect: [
                    {
                        name: 'admin',
                    },
                ],
            },
        },
        {
            name: 'requestMessage',
            description: 'Chat with model NLP',
            Role: {
                connect: [
                    {
                        name: 'admin',
                    },
                    {
                        name: 'user',
                    },
                ],
            },
        },
        {
            name: 'LoginAdmin',
            description: 'Login for admin',
            Role: {
                connect: [
                    {
                        name: 'admin',
                    },
                ],
            },
        },
        {
            name: 'LoginUser',
            description: 'Login for user',
            Role: {
                connect: [
                    {
                        name: 'user',
                    },
                ],
            },
        },
        {
            name: 'responseMessage',
            description: 'Response to user',
            Role: {
                connect: [
                    {
                        name: 'chatbot',
                    },
                ],
            },
        },
    ]

    for (let permission of permissions) {
        await prisma.permission.create({
            data: permission,
        })
    }

    console.log('Permissions seeded successfully')
}
