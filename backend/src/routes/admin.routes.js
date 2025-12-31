import express from "express";
import protect from "../middlewares/auth.middleware.js";
import restrictTo from "../middlewares/role.middleware.js";
import {
  getAllUsers,
  toggleUserStatus
} from "../controllers/admin.controller.js";

const router = express.Router();

router.get("/users", protect, restrictTo("admin"), getAllUsers);
router.patch("/users/:id/status", protect, restrictTo("admin"), toggleUserStatus);

export default router;
