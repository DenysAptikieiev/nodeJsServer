import express from 'express'
import fileUpload from 'express-fileupload'
import mongoose from 'mongoose'
import router from './Route/router.js'

const PORT = 5000;
const URL_DB = `mongodb+srv://aptikieievdenys:NMzQMBCKAoBbW6ex@cluster0.xczjhfi.mongodb.net/?retryWrites=true&w=majority`

const app = express();

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

async function startApp() {
  try {
   await mongoose.connect(URL_DB, {useUnifiedTopology: true, useNewUrlParser: true})
    app.listen(PORT, () => console.log("Server Started!" + PORT))
  } catch(e) {
    console.log(e)
  }
}

startApp()

