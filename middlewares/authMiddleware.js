const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

exports.authMiddleware = async(req,res,next) => {
    let token;
    if(req?.headers?.authorization?.startsWith('Bearer')){
        token = req.headers.authorization.split(" ")[1];
        console.log(token);
            if(token){
               const decode = jwt.verify(token,process.env.JWT_SECRET);
                const  user = await User.findById(decode?.id);
                console.log(user);
                req.user = user;
                next();
            }
    }else{
        throw new Error('There is no token Attached to Header')
    }
}