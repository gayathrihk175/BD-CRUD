const express = require("express");  
const app = express();  
const dotenv = require("dotenv");
const path = require("path");
const userRoutes = require("./routes/userRoutes")
dotenv.config();  
const cors = require("cors");
const dbConnected = require("./config/dbConnect");
const PORT = process.env.PORT||4000;
dbConnected.dBConnect();

console.log(path.join(__dirname, "uploads"))

app.use("/image", express.static(path.join(__dirname, "uploads")));

app.use(cors());
app.use(express.json());
app.use(userRoutes);

app.listen(PORT,(err)=>{
    console.log(`Server Running on ${PORT}`);
})




