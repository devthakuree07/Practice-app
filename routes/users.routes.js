const express = require("express");
const { testHome } = require("../controllers/users.controllers");

const userRouter = express.Router();

userRouter.get('/', testHome); 

module.exports = { userRouter };