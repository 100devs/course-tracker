const express = require("express");
// const session = require('express-session')
const apiRoutes = require("./routes/apiRoutes");
const authRoutes = require("./routes/authRoutes");
const path = require("path");

// saves express function to the variable app
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectDB = require("./config/database");
connectDB();
// sets up root route
app.use("/api", apiRoutes, authRoutes);

// Code that tells heroku where to find react build files
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Api running");
  });
}

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running, you better catch it!");
});
