const { User } = require("../models/users");

const testHome = (req, res) => {
  return res.send(" Home Page of Practice-app!");
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

    const existingUser =  await User.findOne({ where: {email} });
    if(!existingUser){
        return res.json("User doesn't exists!");
    }

    if(!password === existingUser.password) {
        return res.json("Invalid email or password!");
    }

    return res.json("User login successfully!", { data: {
        username,
        email
    }});
    

};

module.exports = { testHome, registerUser, loginUser };
