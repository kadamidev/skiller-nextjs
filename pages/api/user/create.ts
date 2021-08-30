// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient({ log: ['query'] })

    try {
        const { user: userData } = req.body
        const user = await prisma.user.create({
            data: {
                username: userData.username,
                email: userData.email,
                avatar: userData.avatar,
            }
        })
        res.status(201)
        res.json({user})
    } catch(e) {
        res.status(500)
        res.json({ error: 'Unable to create user in the database' })
    } finally {
        await prisma.$disconnect
    }
  }
  

//   model User {
//     id Int @id @default(autoincrement())
//     username String
//     email String
//     avatar String
//     createdAt DateTime @default(now())
//   }