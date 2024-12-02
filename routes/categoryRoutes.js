const express = require("express");
const authToken = require("../middlewares/authMiddleware");
const {
  createCategoryController,
  getAllCatagoryController,
  updateCategoryControler,
} = require("../controllers/categoryController");

const router = express.Router();
//Get

router.post("/create", authToken, createCategoryController);
router.get("/getAll", getAllCatagoryController);
router.put("/update", authToken, updateCategoryControler);

module.exports = router;
