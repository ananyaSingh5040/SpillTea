const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET_KEY;

// This function will create tokens
function setUser(user) {
  const payload = {
    id: user._id,
    email: user.email,
  };
  jwt.sign(payload, secret);
}
// This function will verify tokens
function getUser(token) {
  if (!token) return null;
  try {
    jwt.verify(token, secret);
  }
  catch (error){
    return null;
  }
}
module.exports = {
  setUser,
  getUser,
};
