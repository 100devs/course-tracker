module.exports = {
  checkAdmin: function (req, res, next) {
    if (req.session.isAdmin) {
      next();
    } else {
      res.redirect("./login");
    }
  },
};
