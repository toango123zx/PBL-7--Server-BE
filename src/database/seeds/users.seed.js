const { prisma } = require('../index');

export const usersSeed = async () => {
    const users = [
        {
            username: "admin",
            password: "$2b$10$MGWBzXIAmFrOrm1KgaOr8OAg6j1YWrVtq7n.PfQDvMBwbQpFy.gMy", //1
            name: "admin",
            dateOfBirth: new Date(),
            gender: true,
            email: "admin@gmail.com",
            Role: {
                connect: {
                    name: "admin"
                }
            }
        },
        {
            username: "user",
            password: "$2b$10$MGWBzXIAmFrOrm1KgaOr8OAg6j1YWrVtq7n.PfQDvMBwbQpFy.gMy", //1
            name: "user",
            dateOfBirth: new Date(),
            gender: true,
            email: "user@gmail.com",
            Role: {
                connect: {
                    name: "user"
                }
            }
        },
        {
            username: "chatbot version 1.0",
            password: "$2b$10$MGWBzXIAmFrOrm1KgaOr8OAg6j1YWrVtq7n.PfQDvMBwbQpFy.gMy", //1
            name: "chatbot",
            dateOfBirth: new Date,
            gender: true,
            email: "chatbot@gmail.com",
            Role: {
                connect: {
                    name: "chatbot"
                }
            }
        }
    ];

    for (let i = 1; i < 400; i++) {
        users.push(
            {
                username: `admin${i}`,
                password: `$2b$10$MGWBzXIAmFrOrm1KgaOr8OAg6j1YWrVtq7n.PfQDvMBwbQpFy.gMy`, //1
                name: `admin${i}`,
                dateOfBirth: new Date(),
                gender: true,
                email: `admin${i}@gmail.com`,
                Role: {
                    connect: {
                        name: `admin`
                    }
                }
            },
            {
                username: `user${i}`,
                password: `$2b$10$MGWBzXIAmFrOrm1KgaOr8OAg6j1YWrVtq7n.PfQDvMBwbQpFy.gMy`, //1
                name: `user${i}`,
                dateOfBirth: new Date(),
                gender: true,
                email: `user${i}@gmail.com`,
                Role: {
                    connect: {
                        name: `user`
                    }
                }
            });
    };
    for (let user of users) {
        await prisma.user.create({
            data: user
        });
    };
    console.log("Users seeded successfully");
};