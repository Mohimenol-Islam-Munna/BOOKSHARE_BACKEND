const express = require("express");
const res = require("express/lib/response");
const dotEnv = require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

// ----------- application middlewares --------
// parse incomming req body
app.use(express.json());

// ---------- end application middlewares ------

// ------------------ routes -------------------
// user routes
app.get("/", (req, res) => {
  res.send("home page");
});

app.get("*", (req, res) => {
  res.send("page not found");
});

// admin routes

// ------------------ end routes ------------------

// connect to database
mongoose.connect(process.env.DB_URL, (err) => {
  if (err) {
    console.log("Database Conection Error");
  } else {
    app.listen(process.env.DB_PORT, () => {
      console.log(`your server is running at ${process.env.DB_PORT}...`);
    });
  }
});
