import express from "express";
import { nanoid } from "nanoid";
import RoomModel from "../models/room";

export const createRoom = async (
  req: express.Request,
  res: express.Response
) => {
  const { userName, roomName, password } = req.body;
  if (!userName || !roomName || !password) {
    res.status(422).json({ error: "please add all field" });
    return;
  }
  const newRoom = new RoomModel({
    roomId: nanoid(6),
    members: [{ userId: nanoid(4), name: userName }],
    roomName,
    password,
  });

  try {
    const savedRoom = await newRoom.save();
    res.status(200).json(savedRoom);
    console.log(savedRoom);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getRoomsOfUser = async (
  req: express.Request,
  res: express.Response
) => {
  const { userId } = req.params;
  try {
    const room = await RoomModel.find({
      "members.userId": userId,
    });

    res.status(200).json(room);
  } catch (e) {
    res.status(500).json(e);
  }
};

export const joinRoom = async (req: express.Request, res: express.Response) => {
  const { userName, roomId, user, password } = req.body;

  if (!userName || !roomId || !password) {
    res.status(422).json({ error: "please add all field" });
  } else {
    RoomModel.findOne({ roomId: roomId })
      .then(async (savedRoom) => {
        if (!savedRoom) {
          res.status(422).json({ error: "Invalid Room Id or password" });
        } else if (savedRoom?.password === password) {
          if (!user) {
            try {
              const newUser = { userId: nanoid(4), name: userName };
              const join_room = await RoomModel.updateOne(
                { _id: savedRoom._id },
                { $push: { members: newUser } },
                { new: true }
              );

              res.status(200).json({
                UserId: newUser.userId,
                UserName: newUser.name,
                RoomId: roomId,
                RoomName: savedRoom.roomName,
              });
              //res.status(200).json(join_room);
              console.log(join_room);
            } catch (error) {
              res.status(422).json({ error: error.message });
            }
          } else {
            if (user.RoomId == roomId && user.UserName != userName) {
              //console.log(`you have to login with this user name ${user.UserName}........ `)
              res.status(400).json({
                error: `you have to login with this user name ${user.UserName}`,
              });
            } else {
              res.status(200).json({ msg: `joined room` });
            }
          }
        } else {
          res.status(422).json({ error: "Invalid room id or password" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export const codeSave = async (
  req: express.Request,
  _res: express.Response
) => {
  const { roomId, code } = req.body;

  await RoomModel.findOneAndUpdate(
    { roomId: roomId },
    { $set: { code: code } },
    { new: true }
  );
  return true;
};
