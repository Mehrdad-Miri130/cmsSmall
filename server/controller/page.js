const pageDao = require("../services/page-dao");
const { validationResult } = require("express-validator");

exports.getIndex = async (req, res, next) => {
  try {
    const docs = await pageDao.pageList();
    res.json({ status: true, data: docs });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: false, error: "server error, please try later" });
  }
};
exports.getAllPagesByAdmin = async (req, res, next) => {
  try {
    const docs = await pageDao.pageListByAdmin();
    res.json({ status: true, data: docs });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: false, error: "server error, please try later" });
  }
};
exports.getAllMyBlogs = async (req, res, next) => {
  try {
    const docs = await pageDao.getAllMyBlogs(req.user.id);
    res.json({ status: true, data: docs });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: false, error: "server error, please try later" });
  }
};

exports.deleteOne = async (req, res, next) => {
  try {
    const deleted = await pageDao.deleteOne(req.user.id, req.params.id);
    if (!deleted)
      return res.status(404).json({
        status: false,
        error: "page not found or deleted before",
      });
    res.json({ status: true });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: false, error: "server error, please try later" });
  }
};

exports.deleteOneByAdmin = async (req, res, next) => {
  try {
    const deleted = await pageDao.deleteOneByAdmin(req.params.id);
    if (!deleted)
      return res.status(404).json({
        status: false,
        error: "page not found or deleted before",
      });
    res.json({ status: true });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: false, error: "server error, please try later" });
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const doc = await pageDao.getOne(req.params.id);
    if (!doc)
      return res.status(404).json({
        status: false,
        error: "page not found",
      });
    res.json({ status: true, data: doc });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: false, error: "server error, please try later" });
  }
};

exports.addPage = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    const newPageObject = {
      title: req.body.title,
      publishedAt:
        req.body.publishedAt === "0001-01-01" ? null : req.body.publishedAt,
      author: req.user.id,
      content: req.body.content,
      orders: req.body.orders,
      image: req.body.image,
    };
    const lastID = await pageDao.addPage(newPageObject);
    res.json({ status: true, data: lastID });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: false, error: "server error, please try later" });
  }
};

exports.addPageByAdmin = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    const newPageObject = {
      title: req.body.title,
      publishedAt:
        req.body.publishedAt === "0001-01-01" ? null : req.body.publishedAt,
      author: req.body.author,
      content: req.body.content,
      orders: req.body.orders,
      image: req.body.image,
    };

    const doc = await pageDao.addPage(newPageObject);
    res.json({ status: true, data: doc });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: false, error: "server error, please try later" });
  }
};

exports.updatePageByUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    req.body.publishedAt =
      req.body.publishedAt === "0001-01-01" ? null : req.body.publishedAt;
    // condition ? 1 : 2 ;
    await pageDao.updatePageByUser(req.user.id, req.params.id, req.body);
    res.json({ status: true });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: false, error: "server error, please try later" });
  }
};

exports.updatePageByAdmin = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    req.body.publishedAt =
      req.body.publishedAt === "0001-01-01" ? null : req.body.publishedAt;
    await pageDao.updatePageByAdmin(req.params.id, req.body);
    res.json({ status: true });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: false, error: "server error, please try later" });
  }
};
