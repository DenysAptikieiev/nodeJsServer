import Post from "./Post.js";
import PostsService from './PostsService.js'
class PostsController {
    async create(req, res) {
        try {
            const post = await PostsService.create(req.body, req.files.picture)
            res.json(post)
        } catch ({message}) {
            res.status(500).json(message)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await PostsService.getAll();
            return res.json(posts)
        } catch ({message}) {
            res.status(500).json(message)
        }
    }
    async getById(req, res) {
        try {
            const post = await PostsService.getById(req.params.id);
            return res.json(post)
        } catch ({message}) {
            res.status(500).json(message)
        }
    }
    async update(req, res) {
        try {
            const updatedPost = await PostsService.update(req.body)
            return res.json(updatedPost)
        } catch ({message}) {
            res.status(500).json(message)
        }
    }
    async delete(req, res) {
        try {
            const post = await PostsService.delete(req.params.id)
            return await res.json(post)
        } catch ({message}) {
            res.status(500).json(message)
        }
    }
}

export default new PostsController()