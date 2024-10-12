import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import { protectRoute } from "../middlewire/protectRoute.js";

const router = express.Router()

router.post("/send/:receiverId", protectRoute,sendMessage)
router.get('/send/:userId', protectRoute, getMessages)

export default router;