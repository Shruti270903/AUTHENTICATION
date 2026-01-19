import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/mern-auth`);
        console.log("MongoDB connected successfully");
    }
    catch{
        console.log("MongoDB connection failed");
    }
}
export default connectDB;