const {default:mongoose} = require("mongoose");
exports.dBConnect = () => { 
    try {
        const connectToDB = mongoose.connect(process.env.URI)
        console.log(`DB Connected`)
    } catch (error) {
        console.log(`Error `)
        throw error;
    }
}