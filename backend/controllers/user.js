const User = require("../models/user");
const {setUser} = require("../service/auth");
async function handleUserSignUp(req, res) {
  const { name, email, password } = req.body;
  try {
    const user = await User.create({
      name,
      email,
      password,
    });
    res
      .status(201)
      .json({msg: "User created succesfully!", id: user._id});
  } catch {
    res.status(500).json({
      msg: "Error in creating user!",
      error: err.message,
    });
  }
}
async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({
    email,
    password,
  });
  if (!user) {
    res
      .status(401)
      .json({ success: false, msg: "No user found!", err: error.message });
  }
  const token = setUser(user);
  res.cookie("uid",token);
  res.status(200).json({msg: "User Logged In!"});
}
module.exports = { handleUserSignUp, handleUserLogin };
