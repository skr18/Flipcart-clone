import User from "../model/user-schema.js";

export const userSignup = async(request,responce) =>{
    try {
        const exist = await User.findOne({ username: request.body.username});
        if(exist){
            return responce.status(401).json({message: "user already exist"});
        }
        const user = request.body;
        const newuser = new User(user);
        await newuser.save();

        responce.status(200).json({message: user});
    } catch (error) {
        console.log("Error in user controller ",error.message);
    }
}