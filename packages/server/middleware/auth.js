module.exports = {
  checkAdmin: function (req, res, next) {
    if (process.env.NODE_ENV !== "production") {
      next();
    }
    if (req.session.isAdmin) {
      next();
    } else {
      res.redirect("./login");
    }
  },
};
