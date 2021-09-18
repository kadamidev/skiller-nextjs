import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";


export default async function (req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    const prisma = new PrismaClient({ log: ['query', 'info'] })
    const { userId } = req.query
    try {
        const cards = await prisma.tab.findMany({
            where: {
                user_id: userId
            }
        })
        res.status(200)
        res.json({ tabs })
    } catch(e) {
        res.status(500)
        res.json({ error: "Unable to fetch tabs" })
    } finally {
        await prisma.$disconnect()
    }
}