const userModel = require("../model/userSchema")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')


const SignupController = async (req,res)=>{
    try {
        const body = req.body;
        console.log(body)

        const {fullName , email, password} = body
        if(!fullName|| !email|| !password){
            return res.status(400).send({message: "required filed are missing"})
        }
        const hashpass = await bcrypt.hash(password,5)
        const objToSend = {
            full_Name: fullName,
            email: email,
            password: password
        }

        const emailExist = await userModel.findOne({email});
        if(emailExist){
            return res.status(400).send({message: "email already exist"})
        }

        const userSave = await userModel.create(objToSend);

        res.status(200).send({status: true, message: "user sign in successfully", data:userSave})


        
    } catch (error) {
        res.json({
            status: false,
            message: error.message
        })
    }

}

module.exports ={
    SignupController
}