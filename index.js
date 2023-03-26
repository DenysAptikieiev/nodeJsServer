import express from 'express'
import mongoose from 'mongoose'
import Post from './Post.js'

const URL_DB = `mongodb+srv://aptikieievdenys:FLRKoaNIhOX3HC2F@cluster0.wla6lh3.mongodb.net/?retryWrites=true&w=majority`

const PORT = 5000;

const app = express();

app.post('/', async (req, res) => {
  const {author, title, picture, content} = req.body
  const post = await Post.create({author, title, picture, content})
  res.status(200).json('Server are working')
})

async function startApp() {
  try {
   await mongoose.connect(URL_DB)
    app.listen(PORT, () => console.log("Server Started!" + PORT))
  } catch(e) {
    console.log(e)
  }
}

startApp()

