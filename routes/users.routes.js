const express = require("express");
const { getAllUsers, registerUser, loginUser, getUserById} = require("../controllers/users.controllers");

const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.post('/register', registerUser); 
userRouter.post('/login', loginUser); 
userRouter.post('/:id', getUserById); 


module.exports = { userRouter };