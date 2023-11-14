const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email : {
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    age:{
        type:Number
    }
}, {timestamps:true}
)

userSchema.pre('save',async function(next){
    const salt = await bcrypt.genSaltSync(10)
    this.password = await bcrypt.hash(this.password,salt)
})
userSchema.methods.isPasswordMatched = async function (enterPassword){
    return await bcrypt.compare(enterPassword, this.password)
}

// const User = mongoose.model("User",userSchema);
// module.exports = User;

module.exports = mongoose.model('User', userSchema);
