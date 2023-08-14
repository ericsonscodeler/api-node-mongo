import { Request, Response } from 'express'

import { getUser } from '../db/users'

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const user = await getUser()

    return res.status(200).json(user)
  } catch (error) {
    console.log(error)
    return res.sendStatus(400)
  }
}
