import express from "express";
import RoomModel from "../models/Room";

export const createRoom = async (
  req: express.Request,
  res: express.Response
) => {
  console.log(req.body);
  const newRoom = new RoomModel({
    members: [req.body.senderId],
  });

  console.log(newRoom);
  try {
    const savedRoom = await newRoom.save();
    res.status(200).json(savedRoom);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getRoomsOfUser = async (
  req: express.Request,
  res: express.Response
) => {
  console.log(req.params);
  try {
    const room = await RoomModel.find({
      members: { $in: [req.params.userId] },
    });

    res.status(200).json(room);
  } catch (e) {
    res.status(500).json(e);
  }
};
