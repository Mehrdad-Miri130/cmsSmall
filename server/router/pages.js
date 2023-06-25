const controller = require("../controller/page");
const auth = require("../controller/auth");
const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
// http://localhost:3000/api/pages/my-blog
router.get("/my-blog", auth.isLoggedIn, controller.getAllMyBlogs);
// http://localhost:3000/api/pages/by-admin
router
  .route("/by-admin")
  .get(auth.isLoggedIn, auth.restrictToAdmin, controller.getAllPagesByAdmin)
  .post(
    auth.isLoggedIn,
    auth.restrictToAdmin,
    [
      check("image").notEmpty().isString(),
      check("orders").notEmpty().isString(),
      check("title").notEmpty().isString(),
      check("author").notEmpty().isNumeric(),
      check("content").notEmpty().isString(),
      check("publishedAt").isDate({ format: "YYYY-MM-DD", strictMode: true }),
    ],
    controller.addPageByAdmin
  );
// http://localhost:3000/api/pages/by-admin/1
router
  .route("/by-admin/:id")
  .patch(
    auth.isLoggedIn,
    auth.restrictToAdmin,
    [
      check("image").notEmpty().isString(),
      check("orders").notEmpty().isString(),
      check("title").notEmpty().isString(),
      check("author").notEmpty().isNumeric(),
      check("content").notEmpty().isString(),
      check("publishedAt").isDate({ format: "YYYY-MM-DD", strictMode: true }),
    ],
    controller.updatePageByAdmin
  )
  .delete(auth.isLoggedIn, auth.restrictToAdmin, controller.deleteOneByAdmin);
// http://localhost:3000/api/pages
router
  .route("/")
  .get(controller.getIndex)
  .post(
    auth.isLoggedIn,
    [
      check("image").notEmpty().isString(),
      check("orders").notEmpty().isString(),
      check("title").notEmpty().isString(),
      check("content").notEmpty().isString(),
      check("publishedAt").isDate({ format: "YYYY-MM-DD", strictMode: true }),
    ],
    controller.addPage
  );
// http://localhost:3000/api/pages/2
router
  .route("/:id")
  .get(controller.getOne)
  .patch(
    auth.isLoggedIn,
    [
      check("image").notEmpty().isString(),
      check("orders").notEmpty().isString(),
      check("title").notEmpty().isString(),
      check("content").notEmpty().isString(),
      check("publishedAt").isDate({ format: "YYYY-MM-DD", strictMode: true }),
    ],
    controller.updatePageByUser
  )
  .delete(auth.isLoggedIn, controller.deleteOne);

module.exports = router;
