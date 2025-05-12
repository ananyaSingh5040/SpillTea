const mongoose = require("mongoose");
async function connectDB(url) {
  try {
    mongoose.connect(url);
    console.log("MongoDB Connected!");
  } catch {
    console.log("Error in connecting DB!, ", error.message);
  }
}
module.exports = { connectDB };
