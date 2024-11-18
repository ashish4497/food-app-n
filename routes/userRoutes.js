const express = require("express");
const {
  userController,
  upateUserController,
  deleteUserController,
} = require("../controllers/userController");
const authToken = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/getUser", authToken, userController);
router.put("/updateUser", authToken, upateUserController);
router.delete("/removeUser/:id", authToken, deleteUserController);

module.exports = router;
