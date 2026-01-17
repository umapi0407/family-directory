import express from "express"
import authMiddleware from "../middleware/auth.js"
import {
  createMember,
  updateMember,
  deleteMember,
  getAllMembers,
  getMemberBySurname,
} from "../controllers/memberController.js"

const router = express.Router()

// Public routes
router.get("/", getAllMembers)
router.get("/search", getMemberBySurname)

// Admin-only routes
router.post("/", authMiddleware, createMember)
router.put("/:id", authMiddleware, updateMember)
router.delete("/:id", authMiddleware, deleteMember)

export default router
