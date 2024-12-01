const resturantModel = require("../models/resturantModel");

const createResturantController = async (req, res) => {
  try {
    const {
      title,
      imageUrl,
      foods,
      time,
      pickup,
      delivery,
      isOpen,
      logoUrl,
      rating,
      ratingCount,
      code,
      coords,
    } = req.body;

    if (!title || !coords) {
      return res.status(400).json({
        success: false,
        message: "Please provide both title and coordinates (address).",
      });
    }

    // Create a new restaurant
    const newResturant = new resturantModel({
      title,
      imageUrl,
      foods,
      time,
      pickup,
      delivery,
      isOpen,
      logoUrl,
      rating,
      ratingCount,
      code,
      coords,
    });
    await newResturant.save();
    return res.status(201).json({
      success: true,
      message: "New restaurant created successfully.",
      data: newResturant,
    });
  } catch (error) {
    console.error("Error creating restaurant:", error);
    return res.status(500).json({
      success: false,
      message: "Error creating the restaurant. Please try again.",
      error: error.message,
    });
  }
};

const getAllResturantController = async (req, res) => {
  try {
    const resturants = await resturantModel.find({});
    if (!resturants) {
      return res.status(404).send({
        success: false,
        message: "resturant not found",
      });
    }
    res.status(200).send({
      success: true,
      totalCount: resturants.length,
      resturants,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in get API",
      error,
    });
  }
};

const getResturantByIdcontroller = async (req, res) => {
  try {
    const resturantId = req.params.id;
    if (!resturantId) {
      return res.status(404).send({
        success: false,
        message: "Resturant Id Not found",
      });
    }
    const resturnat = await resturantModel.findById(resturantId);
    if (!resturnat) {
      return res.status(404).send({
        success: false,
        message: "Resturant Not Found",
      });
    }
    res.status(200).send({
      success: true,
      resturnat,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Get resturant By Id",
    });
  }
};

const deleteResturanController = async (req, res) => {
  try {
    const resturantId = req.params.id;
    if (!resturantId) {
      return res.status(404).send({
        success: false,
        message: "Please Provide resurantId",
      });
    }
    await resturantModel.findByIdAndDelete(resturantId);
    res.status(200).send({
      success: true,
      message: "resturant Deleted SucessFully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in delete API",
      error,
    });
  }
};

module.exports = {
  createResturantController,
  getAllResturantController,
  getResturantByIdcontroller,
  deleteResturanController,
};
