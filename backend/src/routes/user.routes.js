import express from "express";
import protect from "../middlewares/auth.middleware.js";
import { getProfile, updateProfile,changePassword } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protect, getProfile);
router.put("/", protect, updateProfile);
router.put("/change-password", protect, changePassword);

export default router;
