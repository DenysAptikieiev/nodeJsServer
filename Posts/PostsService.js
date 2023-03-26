import Post from "./Post.js";
import FileService from "./FileService.js";
class PostsService {
    create(post, picture) {
        const fileName = FileService.saveFile(picture)
        const createdPost = Post.create({...post, picture: `${fileName}`})
        return createdPost
    }

    async getAll() {
        const posts = Post.find();
        return posts
    }

    async getById(id) {
        if (!id) throw new Error('Id не указан')
        const post = Post.findById(id);
        return post
    }

    async update(post) {
        if (!post._id) throw new Error('Id не указан')
        const updatedPost = Post.findByIdAndUpdate(post._id, post, {new: true})
        return updatedPost
    }

    async delete(id) {
        if (!id) throw new Error('Id не указан')
        const post = await Post.findByIdAndDelete(id)
        return post
    }
}

export default new PostsService()