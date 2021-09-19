import express from "express";
import {
  createRoom,
  getRoomsOfUser,
  joinRoom,
  codeSave,
} from "../controllers/room";

const router = express.Router();

// new room
router.post("/room", createRoom);

// join room
router.post("/joinRoom", joinRoom);

// get rooms of a user
router.get("/room/:userId", getRoomsOfUser);

// post code to DB
router.post("/code", codeSave);

module.exports = router;
