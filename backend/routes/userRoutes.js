const express = require("express");

// custom modules
const userController = require("../controllers/userController");

const router = express.Router();

// GET: users list
router.get("/", userController.getAllUser);

// GET: user

// POST : create user
router.post("/create", userController.createUser);

// POST : create multiple user

// PUT : update user

// DELETE : delete user

module.exports = router;
