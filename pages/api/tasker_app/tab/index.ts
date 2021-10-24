import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
// import { verify } from 'jsonwebtoken'
import { authenticated } from "../../../../lib/auth";



export default authenticated(async function (req: NextApiRequest, res: NextApiResponse, user_id) {
    if(req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' })
    }

    const prisma = new PrismaClient({ log: ["query"] })
    try {
        const tabs = await prisma.tab.findMany({
            where: {
                    // @ts-ignore
                user_id: user_id
            },
            orderBy: {
                id: 'asc'
            },
            include: {
                Card: { 
                    orderBy: {
                        id: 'asc'
                    },
                    include: {
                        items: {
                            orderBy: {
                                id: 'asc'
                            }
                        }
                    }
                },
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
})
