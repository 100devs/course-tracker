module.exports = {
  checkAdmin: function (req, res, next) {
    if (req.session.isAdmin) {
      next();
    } else {
      return res.status(403).send({ message: "Access forbidden" });
    }
  },
};
