import { Router } from 'express'
import authController from '../controllers/AuthController'

const AuthRouter = Router()

AuthRouter.post('/api/createuser', authController.CreateUser)
AuthRouter.delete('/api/deleteuser/:_id', authController.DeleteUser)
AuthRouter.post('/api/adminauth', authController.Authenticate)

export default AuthRouter