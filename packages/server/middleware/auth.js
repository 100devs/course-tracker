module.exports = {
  checkAdmin: function (req, res, next) {
    if (process.env.NODE_ENV !== "production") {
      // TODO: this is temporary/remove after adding sessions
      next();
    }
    if (req.session.isAdmin) {
      next();
    } else {
      res.redirect("./login");
    }
  },
};
