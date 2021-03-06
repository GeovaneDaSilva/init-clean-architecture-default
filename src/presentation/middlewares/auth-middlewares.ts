
import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import AccountSchema from '../../infra/db/mongodb/mongo-schemas/account-schema'

export class AuthenticationToken {
  async veryfyToken (req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.header('x-access-token')
      if (!token) {
        return res.status(403).json({
          ok: false,
          message: 'Token is required'
        })
      }

      const user: any = await jwt.verify(token, process.env.SEED)

      req.user = user.user

      const userDB = await AccountSchema.findById(req.user.id)

      if (!userDB) {
        return res.status(403).json({
          ok: false,
          mensaje: {
            mensaje: 'Must be authenticated ADMIN_ ROLE User no exist'
          }
        })
      }
      next()
    } catch (error) {
      if (error) {
        res.status(403).json({
          error
        })
      }
    }
  }

  veryfyRole_Admin (req: Request, res: Response, next: NextFunction) {
    const user = req.user

    if (user.role === 'ADMIN_ROLE') {

    } else {
      return res.status(401).json({
        ok: false,
        mensaje: {
          mensaje: 'Must be authenticated ADMIN_ ROLE'

        }

      })
    }
    next() // Is very important for excute of the function
  }
}

export default new AuthenticationToken()
