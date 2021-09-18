import express from "express";
import { createRoom, getRoomsOfUser } from "../controllers/room";

const router = express.Router();

// new room
router.post("/room", createRoom);

// get rooms of a user
router.get("/room/:userId", getRoomsOfUser);

module.exports = router;
