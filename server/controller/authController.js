const User = require("../model/UserReg.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    });
    const token = await jwt.sign({ id: newUser._id }, "secret-key");
    res.status(200).json({ token, newUser });
  } catch (error) {
    console.error("Error creating new user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Check if the password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    //create token
    const token = await jwt.sign({ id: user._id }, "secret-key");

    return res.status(200).json({
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  register,
  login,
};
