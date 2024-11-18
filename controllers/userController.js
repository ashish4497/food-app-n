const userModel = require("../models/userModel");

//Get User Info
const userController = async (req, res) => {
  try {
    const id = req.body.id;
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "user Not Found",
      });
    }
    //hide password
    user.password = undefined;
    res.status(200).send({
      success: true,
      message: "User get Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Eror in Get User API",
      error,
    });
  }
};

//update user
const upateUserController = async (req, res) => {
  try {
    const id = req.body.id;
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "user not found",
      });
    }
    //update
    const { userName, phone, address } = req.body;
    if (userName) user.userName = userName;
    if (phone) user.phone = phone;
    if (address) user.address = address;
    await user.save();
    res.status(200).send({
      success: true,
      message: "user updated sucellfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Update APi",
    });
  }
};

//delete User
const deleteUserController = async (req, res) => {
  try {
    const id = req.params.id;
    await userModel.findByIdAndDelete(id);
    return res.status(200).send({
      success: true,
      message: "Your Account is Deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in delete APi",
    });
  }
};

module.exports = { userController, upateUserController, deleteUserController };
