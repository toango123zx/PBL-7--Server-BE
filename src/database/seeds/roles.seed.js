const { prisma } = require('../index')

export const rolesSeed = async () => {
    const roles = [
        {
            name: 'admin',
            description: 'admin',
        },
        {
            name: 'user',
            description: 'user',
        },
        {
            name: 'chatbot',
            description: 'chatbot',
        },
    ]

    for (let role of roles) {
        await prisma.role.create({
            data: role,
        })
    }

    console.log('Roles seeded successfully')
}
