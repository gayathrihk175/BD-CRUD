const User = require("../models/userModel");
const { generateToken } = require("../config/jwtToken");
const multer  = require('multer')
const ImageModel = require("../models/imageModel")
// const {Storage} = require("../middlewares/multer")

exports.createUsers = async (req, res) => {
  const { name, email, password, age } = req.body;

  try {
    const userAdded = await User.create({
      name: name,
      email: email,
      password: password,
      age: age,
    });
    return res.status(200).json(userAdded);
  } catch (error) {
    return res.status(400).json({ error: error.message });
    // console.log(error)
  }
};


exports.userLogin = async (req, res) => {
  const { email, password } = req.body;
  const findUser = await User.findOne({ email: email });
//   console.log(email);
  if (findUser && (await findUser.isPasswordMatched(password))) {
    res.json({
      _id: findUser?._id,
      email: findUser?.email,
      password: findUser?.password,
      token: generateToken (findUser?._id),
    });
  } else {
    throw new Error(`Invalid Credentials`);
  }
};

exports.getUsers = async (req, res) => {
  try {
    const showAll = await User.find();
    console.log(showAll);
    return res.status(200).json(showAll);
  } catch (error) {
    console.log(error);
  }
};

exports.getSingleUser = async (req, res) => {
  const  id  = req.user._id;
  try {
    const singleUser = await User.findById({ _id: id });
    return res.status(200).json(singleUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  
  }

};

exports.deleteUsers = async (req, res) => {
  const  id  = req.user._id;
  try {
    const deleteUser = await User.findByIdAndDelete({ _id: id });
    return res.status(200).json(deleteUser);
  } catch (error) {
    return res.status(500).json({ error: error.message });
    // console.log(error)
  }

  // res.send("API is running")
};

exports.updateUsers = async (req, res) => {
  const  id  = req.user._id;
  const { name, email, age } = req.body;
  try {
    const updateUser = await User.findByIdAndUpdate(id, {name,email, age},{
      new: true,
    });
    return res.status(200).json(updateUser);
  } catch (error) {
    return res.send(500).json({ error: error.message });
  }
  // res.send("API is running!");
};

// const upload = multer({
//   storage:Storage
// }).single('file')

exports.Upload = async(req,res,err)=>{
  // upload(req,res,(err)=>{
  //   if(err){
  //     console.log(err);
  //   }
  //   else{
  //     const newImage = new ImageModel({
  //               image:{
  //                 data: req.file.filename
  //               }
  //             })
  //             newImage.save()
  //             .then(()=>res.send("sucessfully Uploaded")).catch((err)=>res.send(err))
  //   }
  // })


  console.log("Upload", req.file)

  res.send("sucessfully Uploaded")
}
