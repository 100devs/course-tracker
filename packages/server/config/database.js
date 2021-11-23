require("dotenv").config();
const mongoose = require("mongoose");

const { DB_USER, DB_PASSWORD, NODE_ENV } = process.env;

const DB_STRING =
  NODE_ENV === "production"
    ? `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.gkxtg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    : `mongodb+srv://${DB_USER}:${DB_PASSWORD}@user-dashboard.p60yz.mongodb.net/user-dashboard?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(DB_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = { connectDB, DB_STRING };
