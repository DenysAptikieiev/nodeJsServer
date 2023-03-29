import Router from 'express'
import AuthController from "./authController.js"


const router = new Router()
router.post('/registration', AuthController.registration)
router.post('/login', AuthController.login)
router.get('/users', AuthController.getUsers)
export default router