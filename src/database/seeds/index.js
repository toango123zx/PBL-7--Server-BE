import { rolesSeed } from './roles.seed'
import { permissionsSeed } from './permissions.seed'
import { usersSeed } from './users.seed'

import { prisma } from '../index'

export const main = async () => {
    await rolesSeed()
    await permissionsSeed()
    await usersSeed()
}

// main()
//     .then(async () => {
//         await prisma.$disconnect()
//     })
//     .catch(async (e) => {
//         console.error(e)
//         await prisma.$disconnect()
//         process.exit(1)
//     })
