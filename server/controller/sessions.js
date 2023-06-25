const passport = require("passport");

exports.getCurrent = (req, res) => {
  if (req.isAuthenticated()) return res.json(req.user);
  res.status(401).json({ error: "Not authenticated" });
};

exports.deleteCurrent = (req, res) => {
  req.logout(() => res.end());
};

exports.postSessions = (req, res, next) => {
  passport.authenticate("local.login", (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(401).send(info);
    // success, perform the login
    req.login(user, (err) => {
      if (err) return next(err);
      // req.user contains the authenticated user, we send all the user info back
      return res.status(201).json(req.user);
    });
  })(req, res, next);
};
