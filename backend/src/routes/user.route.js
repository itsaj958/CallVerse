import express from "express";
import { protectRoute } from "../middlewares/auth.middleware.js";
import { getRecommendedUsers, getMyFriends , sendFriendRequest , acceptFriendRequest ,getFriendRequests , getOutgoingFriendReqs } from "../controllers/user.controller.js";


const router = express.Router();

// apply auth middleware to all routes, so that only authenticated users can access these routes
router.use(protectRoute);

router.get("/", getRecommendedUsers);
router.get("/friends", getMyFriends);

// routes  for friend requests , adding friends can be added here in future.

router.post("/friend-request/:id", sendFriendRequest); // :id is dynamic parameter representing recipient user id.

////this is put request because we are updating the friend request status to accepted.
router.put("/friend-request/:id/accept", acceptFriendRequest); // :id is dynamic parameter representing friend request id.

router.get("/friend-requests", getFriendRequests);
router.get("/outgoing-friend-requests", getOutgoingFriendReqs);

export default router;