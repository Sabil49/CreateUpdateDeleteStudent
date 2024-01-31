const jwt = require("jsonwebtoken");
const User = require("../models/user");
const asyncHandler = require("express-async-handler");

const auth = asyncHandler(async (req, res, next) => {
    let token;
    next();
  /*if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      console.log("token => "+token);
      const decoded = jwt.verify(token, 'JWT_SECRET');
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (err) {
      console.log("token err => "+err);
      res.status(401);
      throw new Error("Not Authorized, TOKEN invalid");
    }
  }
  if (!token) {
    console.log("No token");
    res.status(401);
    throw new Error("Not Authorized, no TOKEN");
  }*/
});

module.exports = auth;
