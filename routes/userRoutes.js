const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const upload= require ("../config/multerConfig")

router.get("/users", userController.getAllUsers)
router.post("/createUser",upload.single('profilePic'), userController.createUser)


module.exports = router;

