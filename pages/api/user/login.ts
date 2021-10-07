// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken'
import cookie from 'cookie'


export default async function (req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient({ log: ['query'] })

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Wrong Method' })

    }
    
    try {
        const { user: userData } = req.body


        const user = await prisma.user.findUnique({
            where: {
                username: userData.username
            }
        })

        compare(userData.password, user.password, async (err, result) => {
            if (!err && result) {
                const claims = {sub: user.id}
                const jwt = sign(claims, process.env.JWT_SECRET, { expiresIn: '30d'})
                const cookieSettings = {
                    httpOnly: true, 
                    secure: process.env.NODE_ENV !== 'development',
                    sameSite: 'strict',
                    path: '/'
                }
                // persist cookie past session if remember me
                if (userData.remember) cookieSettings['maxAge'] = (3600 * 24 * 30) //30 days

                res.setHeader('Set-Cookie', cookie.serialize('auth', jwt, cookieSettings))
                // res.status(201).json({message: `Welcome back ${user.username}`})
                res.status(201).json({user: {username: user.username, id: user.id} })

            } else {
                res.json({message: 'Incorrect username/pw combination'})
            }
        })
    } catch(e) {
        res.status(500)
        res.json({ error: `unable to login at the moment: ${e}` })
    } finally {
        await prisma.$disconnect()
    }
  }
  