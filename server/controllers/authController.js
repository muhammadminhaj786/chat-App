// const userModel = require("../model/userSchema")
// const bcrypt = require("bcryptjs")
// const jwt = require('jsonwebtoken')
// const asyncHandler = require("express-async-handler");


// const SignupController = async (req,res)=>{
//     try {
//         const body = req.body;
//         console.log(body)

//         const {fullName , email, password} = body
//         if(!fullName|| !email|| !password){
//             return res.status(400).send({message: "required filed are missing"})
//         }
//         const hashpass = await bcrypt.hash(password,5)
//         const objToSend = {
//             full_Name: fullName,
//             email: email,
//             password: password
//         }

//         const emailExist = await userModel.findOne({email});
//         if(emailExist){
//             return res.status(400).send({message: "email already exist"})
//         }

//         const userSave = await userModel.create(objToSend);

//         res.status(200).send({status: true, message: "user sign in successfully", data:userSave})


        
//     } catch (error) {
//         res.json({
//             status: false,
//             message: error.message
//         })
//     }

// }

<<<<<<< HEAD
// //get all user api
// const getAllUser = asyncHandler(async (req, res) => {
//   const keyword = req.query.search
//     ? {
//         $or: [
//           { name: { $regex: req.query.search, $options: "i" } },
//           { email: { $regex: req.query.search, $options: "i" } },
//         ],
//       }
//     : {};

//   const users = await userModel.find(keyword)
// //   res.send(users);
// });

// module.exports ={
//     SignupController,
//     getAllUser
// }

const asyncHandler = require("express-async-handler");
const User = require("../model/userSchema");
const generateToken = require("../config/generateToken");


const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await User.find(keyword)
  res.send(users);
});


const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    // pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    //   isAdmin: user.isAdmin,
    //   pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

//@description     Auth the user
//@route           POST /api/users/login
//@access          Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    //   isAdmin: user.isAdmin,
    //   pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

module.exports = { allUsers, registerUser, authUser };
=======
//get all user api
const getAllUser = async (req,res)=>{
    const keyword = req.query.search
    console.log(keyword);
}

module.exports ={
    SignupController,
    getAllUser
}
>>>>>>> 45439d2388a340e48b8eba08c65f63a477b26673
