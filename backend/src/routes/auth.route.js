import express from "express";
import { login, logout, signup ,onboard } from "../controllers/auth.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const  router = express.Router();

router.post("/signup", signup); // if u want to update details on server side , we use post method.
router.post("/login", login);
router.post("/logout", logout);

router.post("/onboarding", protectRoute , onboard); //before processing the onboard request , we need to verify the JWT token to ensure that the user is authenticated.
// protectRoute middleware to verify JWT token

// check if user is logged in
router.get("/me", protectRoute, (req, res) => { // if u want to fetch data from server , we use get method.
  res.status(200).json({ success: true, user: req.user });
});

export default router;