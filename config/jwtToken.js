const jwt = require("jsonwebtoken");
exports.generateToken = (id) => {
    console.log("id", id);
    return jwt.sign({id},process.env.JWT_SECRET)
}