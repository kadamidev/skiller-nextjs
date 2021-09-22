// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";


export default async function (req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient({ log: ['query'] })

    try {
        const { user: userData } = req.body
        const user = await prisma.user.delete({
            where: {
                username: userData.username,
                id: userData.id
            }
        })
        res.status(201)
        res.json({user})
    } catch(e) {
        res.status(500)
        res.json({ error: 'Unable to delete user from the database' })
    } finally {
        await prisma.$disconnect()
    }
  }
  

