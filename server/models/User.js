import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        username: {
            type:String,
            required: true,
            unique:true
        }, 
        email: {
            type:String,
            required: true,
            unique:true
        }, 
        password: {
            type:String,
            required: true,
        }, 
        isAdmin: {
            type: Boolean,
            default: false,
        },},
     {timestamps:true}
)

const userDetail = mongoose.model("UsersDetail", userSchema)

export default userDetail
