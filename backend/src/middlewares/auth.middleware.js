import jwt from "jsonwebtoken";
import User from "../models/user.js";

// Middleware to protect routes by verifying JWT token

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt; // Assuming the token is sent in a cookie named 'jwt'. and only done when cookies-parser is used as middleware in server.js 

    if (!token) {
      return res.status(401).json({ message: "Unauthorized - No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); 

    if(!decoded) {
      return res.status(401).json({ message: "Unauthorized - Invalid token" });
    }

    const user = await User.findById(decoded.userId).select("-password"); // Exclude password field so that it is not available in req.user

    if(!user) {
      return res.status(401).json({ message: "Unauthorized - User not found" });
    }

    req.user = user; // Attach user to request object for further use in controllers

    next(); // after successful verification , proceed to onboard request .
  } catch (error) {
    console.log("Error in protectRoute middleware", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};