require("dotenv").config();

const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const apiRoutes = require("./routes/apiRoutes");
const path = require("path");
const cors = require("cors");

// saves express function to the variable app
const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { connectDB, DB_STRING } = require("./config/database");
connectDB();

//session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: DB_STRING,
      ttl: 24 * 60 * 60, // 1 day
    }),
  })
);

// sets up root route
app.use("/api", apiRoutes);

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
