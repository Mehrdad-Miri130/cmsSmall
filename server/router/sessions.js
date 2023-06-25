const controller = require("../controller/sessions");
const express = require("express");
const router = express.Router();

router.post("/", controller.postSessions);

router
  .route("/current")
  .get(controller.getCurrent)
  .delete(controller.deleteCurrent);

module.exports = router;
