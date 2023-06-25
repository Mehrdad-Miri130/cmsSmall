const controller = require("../controller/user");
const auth = require("../controller/auth");
const express = require("express");
const router = express.Router();

router.get("/", auth.isLoggedIn, auth.restrictToAdmin, controller.userList);

module.exports = router;
