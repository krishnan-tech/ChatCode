import express from "express";
import { createRoom, getRoomsOfUser, joinRoom } from "../controllers/room";

const router = express.Router();

// new room
router.post("/room", createRoom);

// join room
router.post("/joinRoom", joinRoom);

// get rooms of a user
router.get("/room/:userId", getRoomsOfUser);

module.exports = router;
