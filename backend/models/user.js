const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  userName: {
    type: String,
    minLength: 6,
    required: [true, "Username must be required"],
  },
  studentId: {
    type: Number,
    min: 6,
    max: 8,
    required: [true, "Student Id Must be required"],
    unique: [true, "Student Id must be unique"],
  },
  email: {
    type: String,
    required: [true, "Email address must be required"],
    unique: [true, "Email must be unique"],
  },
  password: {
    type: String,
    required: [true, "Password must be required"],
    unique: [true, "Password must be unique"],
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
    required: [true, "Gender must be  required"],
  },
  phone: {
    type: Number,
    min: 11,
    max: 16,
    required: [true, "Phone number must be required"],
    unique: [true, "Phone must be unique"],
  },
  hallName: {
    type: String,
    enum: ["BBSMRH", "BMSFMH", "NOT ALLOCATED"],
    required: [true, "Hall name sust be required"],
  },
  homeDistrict: {
    tpye: String,
  },
  department: {
    type: String,
    required: [true, "Department must be required"],
  },
  session: {
    type: String,
    required: [true, "Department must be required"],
  },
  roles: {
    type: String,
    enum: ["SUPER_ADMIN", "PANEL_ADMIN", "GENERAL_USER"],
    default: "GENERAL_USER",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
  liftedBooks: {
    type: [],
  },
  interestedBooks: {
    type: [],
  },
  suggestedBooks: {
    type: [],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
