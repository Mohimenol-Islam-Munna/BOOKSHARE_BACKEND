const express = require("express");
const mongoose = require("mongoose");

// coustom modules
const User = require("../models/user");

// get all user
exports.getAllUser = (req, res) => {
  res.json({ data: "data" });
};

// get user
exports.getUser = (req, res) => {
  res.send("user list");
};

// create user
exports.createUser = (req, res) => {
  res.send("user list");
};

// create multiple user
exports.createMultipleUser = (req, res) => {
  res.send("user list");
};

// update user
exports.updateUser = (req, res) => {
  res.send("user list");
};

// delete user
exports.deleteUser = (req, res) => {
  res.send("user list");
};
