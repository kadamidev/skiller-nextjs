// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { authenticated } from "../../../lib/auth";



export default authenticated(async function (req: NextApiRequest, res: NextApiResponse, user_id) {
    const prisma = new PrismaClient({ log: ['query'] })

    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Wrong Method' })
    }
    
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: user_id
            }
        })

        res.status(201).json({user: {username: user.username, id: user.id} })


    } catch(e) {
        res.status(500)
        res.json({ error: `unable to login at the moment: ${e}` })
    } finally {
        await prisma.$disconnect()
    }
  })