const io = require("socket.io")(8900, {
  cors: {
    origins: "*:*",
  },
});

console.log("socket started has started");

var socketsStatus = {};
const users: any = {};

const socketToRoom: any = {};

io.on("connection", (socket: any) => {
  // listen to chatMessage
  socket.on("chatMessage", (msg: string) => {
    io.emit("message", msg);
  });

  // listen for event inn editor
  socket.on("editor", (val: string) => {
    io.emit("editor", val);
  });

  // listen for event in output editor
  socket.on("output", (val: string) => {
    console.log(val);
    io.emit("output", val);
  });

  socket.on("join room", (roomID: string | number) => {
    if (users[roomID]) {
      const length = users[roomID].length;
      if (length === 4) {
        socket.emit("room full");
        return;
      }
      users[roomID].push(socket.id);
    } else {
      users[roomID] = [socket.id];
    }
    socketToRoom[socket.id] = roomID;
    const usersInThisRoom = users[roomID].filter((id: any) => id !== socket.id);

    socket.emit("all users", usersInThisRoom);
  });

  socket.on(
    "sending signal",
    (payload: { userToSignal: any; signal: any; callerID: any }) => {
      io.to(payload.userToSignal).emit("user joined", {
        signal: payload.signal,
        callerID: payload.callerID,
      });
    }
  );

  socket.on("returning signal", (payload: { callerID: any; signal: any }) => {
    io.to(payload.callerID).emit("receiving returned signal", {
      signal: payload.signal,
      id: socket.id,
    });
  });

  socket.on("disconnect", () => {
    const roomID = socketToRoom[socket.id];
    let room = users[roomID];
    if (room) {
      room = room.filter((id: any) => id !== socket.id);
      users[roomID] = room;
    }
  });

  // socket.on("joinroom", (roomId: string) => {
  //   socket.join(roomId);
  //   socket.broadcast.to(roomId).emit("userjoined");
  // });
  // socket.on("leaveroom", (roomId: string) => {
  //   socket.leave(roomId);
  // });

  // socket.on("join-room", (roomId: string, userId: string) => {
  //   console.log(roomId, userId);
  //   socket.join(roomId);
  //   socket.broadcast.to(roomId).emit("user-connected", userId);

  //   socket.on("leaveAudioRoom", () => {
  //     socket.broadcast.to(roomId).emit("userLeftAudio", userId);
  //   });
  // });
});
