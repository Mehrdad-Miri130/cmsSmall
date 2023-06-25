exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  return res.status(401).json({ status: false, error: "Not authorized" });
};

exports.restrictToAdmin = (req, res, next) => {
  if (req.user.role === "admin") return next();
  return res.status(401).json({ status: false, error: "permission deny" });
};
