import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";


export default async function (req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient({ log: ["query"] })

    try {
        const {tab: tabData} = req.body
        const tabs = await prisma.tab.findMany({
            where: {
                user_id: tabData.user_id
            }
        })
        res.status(200)
        res.json({ tabs })
    } catch(e) {
        res.status(500)
        res.json({ error: "Unable to fetch tabs" })
    } finally {
        await prisma.$disconnect
    }
}