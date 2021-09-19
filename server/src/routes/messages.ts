import express from "express";
import { createNewMessage, getMessages } from "../controllers/messages";
const router = express.Router();

// add
router.post("/messages", createNewMessage);

// get
router.get("/messages/:roomId", getMessages);

module.exports = router;
