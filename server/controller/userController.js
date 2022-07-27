

import aditya from '../model/userSchema.js'


export const userSignup= async(req,res)=>{
    try{
        const user = request.body;

        const newUser = new aditya(user)
        await newUser.save()
        return res.status(200).json({message:"signup successfull"})

    }
    catch(err){
        console.log(err);
        return res.status(404).json({message:"can't signup"})
    }
}