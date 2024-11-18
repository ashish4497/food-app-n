const express = require("express");
const { testController } = require("../controllers/testControler");

//router object
const router = express.Router();

//routes GET || POST

router.get("/test-user", testController);

module.exports = router;
