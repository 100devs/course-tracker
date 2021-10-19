const jwt = require("jsonwebtoken");
const User = require("../models/User");
// if (req.session.isAdmin) <= prev session check

const checkAdmin = async (req, res, next) => {
  const token = req.headers.authentication;

  if (!token) {
    return res.status(403).send({ message: "Token is not valid!" });
  }

  try {
    const decoded = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = await User.findOne({ _id: decoded.userId });
    req.adminStatus = req.user.isAdmin;
    //return next()
    if (req.user.isAdmin) {
      return next();
    } else {
      return res.redirect("/");
    }
  } catch (err) {
    return res.status(403).send({ message: "Access forbidden!" });
  }
};
module.exports = checkAdmin;
