import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";


export default async function (req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient( {log: ["query"] })

    try {
        const { tab: tabData } = req.body
        const deleteTab = await prisma.tab.delete({
            where: {
                id: tabData.id
            }
        })
        res.status(201)
        res.json({deleteTab})
    } catch(e) {
        res.status(500)
        res.json({error: "unable to delete tab from the database"})
    } finally {
        await prisma.$disconnect()
    }

}