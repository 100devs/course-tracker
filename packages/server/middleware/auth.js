const jwt = require("jsonwebtoken");
const User = require("../models/User");
// if (req.session.isAdmin) <= prev session check

const checkAdmin = async (req, res, next) => {
  const token =
    req.headers.authentication ||
    req.query.authentication ||
    req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({ message: "Token is not valid!" });
  }

  try {
    const accessToken = JSON.parse(token)["accesstoken"];
    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    req.user = await User.findOne({ _id: decoded.userId });
    if (req.user.isAdmin) {
      return next();
    } else {
      return res.status(400).send({ message: "User is not an admin" });
    }
  } catch (err) {
    console.log(err);
    return res.status(403).send({ message: "Access forbidden!" });
  }
};
module.exports = { checkAdmin };
