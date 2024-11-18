const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

//Register User
const registerController = async (req, res) => {
  try {
    const { userName, email, password, address, phone } = req.body;
    if (!userName || !email || !password || !address || !phone) {
      return res.status(500).send({
        success: false,
        message: "Please provide all fields",
      });
    }
    //existing User
    const existing = await userModel.findOne({ email });
    if (existing) {
      return res.status(500).send({
        success: false,
        message: "User Already Registered",
      });
    }
    //hash Password
    var salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    //create User
    const user = await userModel.create({
      userName,
      email,
      password: hashPassword,
      address,
      phone,
    });
    res.status(200).send({
      success: true,
      message: "SuccessFully registred",
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

//Login User

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(500).send({
        success: false,
        message: "please provide email and password",
      });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).send({
        success: false,
        message: "user not found",
      });
    }
    //compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(500).send({
        success: false,
        message: "Invalid Credintails",
      });
    }
    //jwt
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "10d",
    });
    res.status(200).send({
      success: true,
      message: "Login successfully",
      token,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in Login",
    });
  }
};

module.exports = { registerController, loginUser };
