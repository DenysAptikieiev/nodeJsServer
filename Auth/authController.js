import User from "../UserModels/User.js";
class AuthController {
    async registration(req, res) {
        try {
            const {user_name, user_password, user_email} = res.body
            const candidate = await User.findOne({user_email})
            if(candidate) {
                return res.status(400).json({message: 'Пользователь с таким имейлом уже существует!'})
            }
            const user = new User({user_name, user_password, user_email})
        } catch(e) {
            console.log(e)
            res.status(400).json({message: 'Registration error'})
        }
    }
    async login(req, res) {
        try {

        } catch(e) {
            console.log(e)
            res.status(400).json({message: 'Login error'})
        }
    }
    async getUsers(req, res) {
        try {
            res.json("server work")
        } catch(e) {
            console.log(e)
        }
    }
}

export default new AuthController()