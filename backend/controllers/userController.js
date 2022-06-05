const express = require("express");
const mongoose = require("mongoose");

// coustom modules
const User = require("../models/user");

// get all user
exports.getAllUser = async (req, res) => {
  try {
    const result = await User.find({});
    res.status(200).json({
      status: "success",
      data: result,
      message: "Successfully get user list",
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      error: err,
      message: "Does not get user list",
    });
  }
};

// get user
exports.getUser = (req, res) => {
  res.send("user list");
};

// create user
exports.createUser = async (req, res) => {
  const user = new User(req.body);

  try {
    const result = await user.save();
    res.json({
      message: "user created succssfully!",
      data: result,
    });
  } catch (err) {
    res.json({
      message: "user does not created!",
      error: err,
    });
  }
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
