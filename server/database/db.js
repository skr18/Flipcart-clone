import mongoose from "mongoose";
// ,{ useUnifieldTopology: true, useNewUrlpraser: true }
export const Connection = async (username,password) =>{
    mongoose.set('strictQuery', false);
    const URL = "mongodb+srv://sujeet:sujeet1234@ecommerce-website.nbjnzv8.mongodb.net/?retryWrites=true&w=majority";
    try{
        await mongoose.connect(URL)
        console.log("Database Connected Sucessfully");
    }catch(error){
        console.log("Error while connecting with database ",error.message);
    }
}

export default Connection;