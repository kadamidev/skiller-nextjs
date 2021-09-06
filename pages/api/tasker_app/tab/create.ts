import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient( {log: ["query"] })


export default async function (req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    try {
        const {tab: tabData} = req.body
        const tab = await prisma.tab.create({
            data: {
                name: 'Untitled',
                user_id: tabData.user_id,
            },
        })
        
        res.status(201)
        res.json({dbid: tab.id})
        // res.json()
    } catch(e) {
        res.status(500)
        res.json({error: "unable to save tab to the database"})
    } finally {
        await prisma.$disconnect()
    }

}