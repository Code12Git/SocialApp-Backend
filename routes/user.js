import express from "express";
import {
  deleteUser,
  followUser,
  getUser,
  updateUser,
  getFriends,
  unfollowUser,
  getAllUsers,
} from "../controllers/UserController.js";

const router = express.Router();

// Update User
router.put("/:id", updateUser);

// Delete User
router.delete("/:id", deleteUser);

// Get User
router.get("/", getUser);

//Get All Users
router.get("/all", getAllUsers);

// Get Friends
router.get("/friends/:userId", getFriends);

// Follow User
router.put("/follow/:id", followUser);

// Unfollow User
router.put("/unfollow/:id", unfollowUser);

export default router;
