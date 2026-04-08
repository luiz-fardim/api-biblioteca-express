import { Router } from 'express'
import { createUser } from '../controllers/userController.js'

const router = Router()

// POST - criar usuário
router.post('/', createUser)

export default router