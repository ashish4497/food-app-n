const mongoose = require("mongoose");

//User Schema

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      require: [true, "userName is Required"],
    },
    email: {
      type: String,
      require: [true, "Email is Required"],
    },
    password: {
      type: String,
      require: [true, "password is required"],
    },
    address: {
      type: Array,
    },
    phone: {
      type: String,
      required: [true, "phone is required"],
    },
    userType: {
      type: String,
      required: [true, "user type is required"],
      default: "clinet",
      enum: ["clinet", "admin", "vendor", "driver"],
    },
    profile: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png",
    },
    answer: {
      type: String,
      required: [!true, "Answer is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
