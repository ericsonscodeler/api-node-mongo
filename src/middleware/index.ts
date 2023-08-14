import { Request, Response, NextFunction } from 'express'

import { get, merge } from 'lodash'

import { getUserBySessionToken } from '../db/users'

export const isAuthentication = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const sessionToken = req.cookies['ERICSON-AUTH']

    if (!sessionToken) {
      return res.sendStatus(403)
    }

    const existingUser = await getUserBySessionToken(sessionToken)

    if (!existingUser) {
      return res.sendStatus(403)
    }

    merge(req, {
      identity: existingUser,
    })

    return next()
  } catch (error) {
    console.log(error)
  }
}
