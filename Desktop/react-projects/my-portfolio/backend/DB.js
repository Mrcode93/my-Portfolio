// db.js

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/booking", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    doctor: { type: String, required: true },
    name: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
  })
);

// const createUser = async (userData) => {
//   const user = new User(userData);
//   await user.save();
//   console.log("User created successfully");
// };

// module.exports = { createUser };
