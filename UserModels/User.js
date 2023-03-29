import {Schema, model} from 'mongoose'

const User = new Schema({
    user_email: {type: String, unique: true, required: true},
    user_name: {type: String, required: true},
    user_password: {type: String, required: true},
    user_roles: [{type: String, ref: "Role"}]
})

export default model('User', User)