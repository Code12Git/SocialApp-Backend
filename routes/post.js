import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getTimelinePost,
  getUserProfile,
  likePost,
  updatePost,
} from "../controllers/PostController.js";

const router = express.Router();

// Create a new post
router.post("/", createPost);

// Update a post
router.put("/:id", updatePost);

// Delete a post
router.delete("/:id", deletePost);

// Like a post
router.put("/:id/like", likePost);

// Get a post
router.get("/:id", getPost);

// Get timeline posts
router.get("/timeline/:userId", getTimelinePost);

// Get All users profile
router.get("/profile/:username", getUserProfile);

export default router;
