//jwtAuth.js
const jwt = require("jsonwebtoken");

module.exports = async function (req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, sails.config.jwt.secret);
    req.userId = decoded.userId;
    return next(); // Ajouter 'return' ici
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};