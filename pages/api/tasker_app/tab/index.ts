import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
// import { verify } from 'jsonwebtoken'
import { authenticated } from "../../../../lib/auth";



export default authenticated(async function (req: NextApiRequest, res: NextApiResponse, user_id) {
    if(req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' })
    }
    console.log(user_id)

    const prisma = new PrismaClient({ log: ["query"] })
    try {
        const tabs = await prisma.tab.findMany({
            where: {
                user_id: user_id
            },
            include: {
                Card: { include: { items: true } }
            }
        })
        res.status(200)
        console.log(tabs)
        res.json({ tabs })
    } catch(e) {
        res.status(500)
        res.json({ error: "Unable to fetch tabs" })
    } finally {
        await prisma.$disconnect()
    }
})
