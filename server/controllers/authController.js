import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
export const register = async(requestAnimationFrame, res)=>{
    const {name, email, password} = req.body;

    if(!name || !email || !password){
        return res.status(400).json({success:false, message:"Details missing, All fields are required"});
    }
    try{
        res.status(200).json({success:true, message:"User registered successfully"});
    }catch(error){
        res.status(500).json({success:false, message:"Error in registering user"});
    }
}