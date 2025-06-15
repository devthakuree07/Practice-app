const { User } = require("../models/users");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ["password"] } 
    });

    res.status(200).json({
      message: "Users fetched successfully!",
      data: users,
    });
  } catch (error) {
    console.error("Error in getAllUsers:", error);
    res.status(500).json({
      message: "Server error while fetching users.",
    });
  }
};

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    return res.json("User already exists!");
  }

  const createUser = await User.create({ username, email, password });
  if (!createUser) {
    return res.json("Invalid credentials!");
  } else {
    return res.json("User registered successfully!");
  }
};

const loginUser = async (req, res) => {
    const { username, email, password } = req.body;

    if(!email || !password){
        return res.json("Email and password are required!");
    }

    const existingUser =  await User.findOne({ where: {email} });
    if(!existingUser){
        return res.json("User doesn't exists!");
    }

    if(password !== existingUser.password) {
        return res.json("Invalid email or password!");
    }

    return res.json({ message: "User login successfully!" , data: {
        username: existingUser.username,
        email: existingUser.email
    }});
};



module.exports = { getAllUsers, registerUser, loginUser };
