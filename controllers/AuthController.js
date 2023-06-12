import User from "../models/User.js";
import bcrypt from "bcrypt";

// Register
export const RegisterController = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  try {
    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new User({
      username,
      email,
      password: hashedPassword,
      confirmPassword: hashedPassword,
    });
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    await user.save();
    res.status(201).json({ message: "User created" });
  } catch (err) {
    res.status(500).json(err);
  }
};

// Login
export const LoginController = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }
    res.status(200).json({ user });
  } catch (err) {
    res.status(400).json(err);
  }
};
