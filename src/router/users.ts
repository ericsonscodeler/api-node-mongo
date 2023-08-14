import { Router } from 'express'

import { getAllUsers } from '../controllers/users'

import { isAuthentication } from '../middleware'

export default (router: Router) => {
  router.get('/users', isAuthentication, getAllUsers)
}
