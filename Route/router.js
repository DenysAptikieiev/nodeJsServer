import Router from 'express'
import PostsController from "../Posts/PostController.js";

const router = new Router()

router.post('/posts', PostsController.create)
router.get('/posts', PostsController.getAll)
router.get('/posts/:id', PostsController.getById)
router.put('/posts', PostsController.update)
router.delete('/posts/:id', PostsController.delete)

export default router
