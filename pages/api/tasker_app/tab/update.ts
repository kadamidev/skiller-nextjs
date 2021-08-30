import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";


export default async function (req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient( {log: ["query"] })

    try {
        const { tab: tabData } = req.body
        const tab = await prisma.tab.update({
            where: {
                id: tabData.id,
            },
            data: {
                name: tabData.name,
            },
        })
        res.status(201)
        res.json({tab})
    } catch(e) {
        res.status(500)
        res.json({error: "unable to update tab name in the database"})
    } finally {
        await prisma.$disconnect()
    }

}