import express from "express";
import { login, logout, signup ,onboard } from "../controllers/auth.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/onboarding", protectRoute , onboard); //before processing the onboard request , we need to verify the JWT token to ensure that the user is authenticated.
// protectRoute middleware to verify JWT token

export default router;