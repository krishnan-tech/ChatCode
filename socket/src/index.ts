const io = require("socket.io")(8900, {
  cors: {
    origin: "http://localhost:3000",
  },
});

console.log("socket started has started");

var socketsStatus = {};

io.on("connection", (socket: any) => {
  const socketId = socket.id;
  // @ts-ignore
  socketsStatus[socket.id] = {};

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

  socket.on("voice", function (data: string) {
    var newData = data.split(";");
    newData[0] = "data:audio/ogg;";
    // @ts-ignore
    newData = newData[0] + newData[1];

    for (const id in socketsStatus) {
      // @ts-ignore
      if (id != socketId && !socketsStatus[id].mute && socketsStatus[id].online)
        socket.broadcast.to(id).emit("send", newData);
    }
  });
});
