import { Request, Response } from 'express'

import { deleteUserById, getUser, getUserById } from '../db/users'

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const user = await getUser()

    return res.status(200).json(user)
  } catch (error) {
    console.log(error)
    return res.sendStatus(400)
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const deleteUser = await deleteUserById(id)

    return res.json(deleteUser)
  } catch (error) {
    console.log(error)
    return res.sendStatus(400)
  }
}

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { username } = req.body

    if (!username) {
      return res.sendStatus(400)
    }

    const user = await getUserById(id)

    user.username = username
    await user.save()

    return res.status(200).json(user).end()
  } catch (error) {
    console.log(error)

    return res.sendStatus(400)
  }
}
