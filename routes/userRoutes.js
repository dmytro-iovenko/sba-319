import express from "express";
import userController from "../controllers/userController.js";

// Create Express Router instance
const router = express.Router();

// Define a route to get all users
router.get("/", userController.getUsers);

// Define a route to create a new user
router.post("/", userController.createUser);

// Define a route to get user with the specified id
router.get("/:id", userController.getUserById);

// Define a route to update user with the specified id
router.patch("/:id", userController.updateUserById);

// Define a route to delete user with the specified id
router.delete("/:id", userController.deleteUserById);

export default router;
