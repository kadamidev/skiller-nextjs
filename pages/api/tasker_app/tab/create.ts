import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";


export default async function (req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient( {log: ["query"] })

    try {
        const { tab: tabData } = req.body
        const tab = await prisma.tab.create({
            data: {
                name: tabData.name,
                user_id: tabData.user_id,
            },
        })
        
        res.status(201)
        res.json({tab})
    } catch(e) {
        res.status(500)
        res.json({error: "unable to save tab to the database"})
    } finally {
        await prisma.$disconnect()
    }

}