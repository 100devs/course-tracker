const router = require("express").Router();
// const User = require('../models/User');
const checkAdmin = (req, res, next) => {
  console.log("You're authorized!");
  next();
};

router
  .get("/login", (req) => {
    console.log(req.url, req.method);
  })
  .post("/login", (req, res) => {
    console.log(req.url, req.method, req.body);
    // const { email, password } = req.body;
    res.status(302).redirect("/"); //TODO: check where exactly this redirects to
  })
  .post("/admin/create-user", checkAdmin, (req) => {
    //TODO: write the checkAdmin function (line 4)
    console.log(req.url, req.method, req.body);
    // const { username, email, password, isAdmin } = req.body;
  });

module.exports = router;
