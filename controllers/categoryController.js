const catogeryModel = require("../models/catogeryModel");

//Create
const createCategoryController = async (req, res) => {
  try {
    const { title, imageUrl } = req.body;
    if (!title) {
      return res.status(404).send({
        success: false,
        message: "title not found",
      });
    }
    const newCategory = await catogeryModel({ title, imageUrl });
    await newCategory.save();
    res.status(200).send({
      success: true,
      message: "created Succesfully",
      newCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in createCategory Api",
      error,
    });
  }
};

//Get All
const getAllCatagoryController = async (req, res) => {
  try {
    const categories = await catogeryModel.find({});
    if (!categories) {
      return res.status(404).send({
        success: false,
        message: "categories not found ",
      });
    }
    res.status(200).send({
      success: true,
      totalCat: categories.length,
      categories,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in geAll Api",
      error,
    });
  }
};

//Update
const updateCategoryControler = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, imageUrl } = req.body;
    const updateCategory = await catogeryModel.findByIdAndUpdate(
      id,
      { title, imageUrl },
      { new: true }
    );
    // updateCategory.save();
    if (!updateCategory) {
      return res.status(404).send({
        success: false,
        message: "Category not found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Category Updated Successfully",
      // updateCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in update Api",
      error,
    });
  }
};

module.exports = {
  createCategoryController,
  getAllCatagoryController,
  updateCategoryControler,
};
