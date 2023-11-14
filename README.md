# BACKEND
- npm init
- npm i express dotenv cors
- npm i -D nodemon  || npm i --save-dev nodemon   (Add as a dev dependency as it is required only for development mode and not during production)
- Requiring express and setting up basic set up
const express = require("express");
const app = express();

app.get("/",(req,res ) => {
    res.send("API is running")
})

app.listen(4000,(req,res) => {
    console.log("App is listening on PORT 3000");
})

- In package.json , add
"start" : "node server.js",
"dev" : "nodemon server.js",

- use dbName
  show collections
  db.users.find()  //users is the collection name here
  npm i mongoose

- Connect to mongoose and manage error using .then and .catch
- Storing PORT and URI in a separate file
- Require dontenv and config
- Build scehema and model
- Create Operation and use app.use(express.json()) if not able to read req
- Read Operation
- Implement route and export it.This is coming from router
- GET a single user and delete