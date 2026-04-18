const jwt = require("jsonwebtoken");
const User = require("../models/User");

const auth = async (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Access denied. No token provided." });
    }

    const token = authHeader.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({ error: "Access denied. No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded || !decoded.userId) {
      return res.status(401).json({ error: "Invalid token." });
    }

    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({ error: "Invalid token." });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Auth error:", error);
    res.status(401).json({ error: "Invalid token." });
  }
};

module.exports = auth;