const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({
        message: "User already exists, you can login",
        success: false,
      });
    }
    const userModel = new User({ username, email, password });
    userModel.password = await bcrypt.hash(password, 10);
    await userModel.save();
    const newUser = await User.findById(userModel._id).select("-password");
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
    res
      .status(201)
      .json({ message: "Signup Succesfully", success: true, newUser: newUser,token:token });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
      err: err.message,
      success: false,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(403).json({
        message: "Auth failed email or password is wrong",
        success: false,
      });
    }

    const isPassEqual = await bcrypt.compare(password, user.password);
    if (!isPassEqual) {
      return res.status(403).json({
        message: "Auth failed email or password is wrong",
        success: false,
      });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ message: "Login successful", user, token });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
      err: err.message,
    });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("jwt");
    res.status(201).json({ message: "User logged out successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};


module.exports = { signup, login, logout };
