const express = require("express");
const { testHome, registerUser, loginUser } = require("../controllers/users.controllers");

const userRouter = express.Router();

userRouter.get('/', testHome); 
userRouter.post('/register', registerUser); 
userRouter.post('/login', loginUser); 

module.exports = { userRouter };