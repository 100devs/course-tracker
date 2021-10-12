const { sign } = require("jsonwebtoken");

const createAccessToken = (userId) => {
  return sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "7d",
  });
};
const createRefreshToken = (userId) => {
  return sign({ userId }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  createAccessToken,
  createRefreshToken,
};
