const express = require("express");
// const app = express();
const {
  createUsers,
  getUsers,
  getSingleUser,
  deleteUsers,
  updateUsers,
  userLogin,
  Upload,
} = require("../controllers/controller");
const router = express.Router();
const { authMiddleware } = require("../middlewares/authMiddleware");
const { uploadMiddleware } = require("../middlewares/multer");

//CREATE
router.post("/register", createUsers);

//READ
router.get("/getUsers", authMiddleware, getUsers);
//GET SINGLE USER
router.get("/singleUser", authMiddleware, getSingleUser);

//DELETE OPERATION
router.delete("/deleteUser", authMiddleware, deleteUsers);

//UPDATE OPERATION
router.patch("/editUser", authMiddleware, updateUsers);

//LOGIN USER
router.post("/login", userLogin);

router.post('/file',uploadMiddleware, Upload)


module.exports = router;
