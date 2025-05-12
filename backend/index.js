const express = require("express");
const dotenv = require("dotenv");
const { connectDB } = require("./connect");
const UserRouter = require("./routes/user");

dotenv.config();
const PORT = process.env.PORT;
const URL = process.env.MONGODB_URI;

connectDB(URL);
const app = express();

app.use(express.json()); //for json data
app.use(express.urlencoded({extended: true})); // for form data

app.use("/user",UserRouter);

app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server started on port: ${PORT}`)
);
