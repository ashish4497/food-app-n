const express = require("express");
const {
  createResturantController,
  getAllResturantController,
  getResturantByIdcontroller,
  deleteResturanController,
} = require("../controllers/resturantController");
const authToken = require("../middlewares/authMiddleware");

const router = express.Router();

//Routes
router.post("/create", authToken, createResturantController);
router.get("/getAll", getAllResturantController);
router.get("/get/:id", getResturantByIdcontroller);
router.delete("/delete/:id", authToken, deleteResturanController);

module.exports = router;
