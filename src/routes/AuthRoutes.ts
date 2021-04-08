import { Router } from 'express'
import authController from '../controllers/AuthController'

const AuthRouter = Router()

AuthRouter.post('/api/adminauth', authController.Authenticate)

