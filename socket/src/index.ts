const io = require("socket.io")(8900, {
  cors: {
    origin: "http://localhost:3000",
  },
});

console.log("socket started has started");

var socketsStatus = {};

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

  socket.on("joinroom", (roomId: string) => {
    socket.join(roomId);
    socket.broadcast.to(roomId).emit("userjoined");
  });
  socket.on("leaveroom", (roomId: string) => {
    socket.leave(roomId);
  });

  socket.on("joinAudioRoom", (roomId: string, userId: string) => {
    socket.broadcast.to(roomId).emit("userJoinedAudio", userId);

    socket.on("leaveAudioRoom", () => {
      socket.broadcast.to(roomId).emit("userLeftAudio", userId);
    });
  });
});
