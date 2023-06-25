const userDao = require("../services/user-dao");

exports.userList = async (req, res, next) => {
  try {
    const docs = await userDao.userList();
    res.json({ status: true, data: docs });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: false, error: "server error, please try later" });
  }
};
