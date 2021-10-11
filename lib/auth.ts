import { NextApiHandler, NextApiRequest, NextApiResponse } from "next"
import { verify } from "jsonwebtoken"



export const authenticated = ( fn: NextApiHandler ) => async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const decodedHttp = verify(req.cookies.authHttp!, process.env.JWT_SECRET)
        const decoded = verify(req.cookies.auth!, process.env.JWT_SECRET)
        req.user_id = decodedHttp.sub

        if (decoded && (decodedHttp.key === decoded.key)) return await fn(req, res)
    } catch (err) {
      console.log(err.stack)
      res.status(401).json({message: 'not authenticated'})
    }
  }