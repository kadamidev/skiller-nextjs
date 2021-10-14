import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { authenticated } from "../../../../lib/auth";

const prisma = new PrismaClient( {log: ["query"] })


export default authenticated(async function (req: NextApiRequest, res: NextApiResponse, user_id) {
    if(req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    try {
        const {tab: tabData} = req.body
        const tab = await prisma.tab.create({
            data: {
                name: 'Untitled',
                user_id: user_id,
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

})