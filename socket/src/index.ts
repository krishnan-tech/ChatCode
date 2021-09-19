const io = require("socket.io")(8900, {
  cors: {
    origin: "http://localhost:3000",
  },
});

console.log("socket started has started");

io.on("connection", (socket: any) => {
  // listen to chatMessage
  socket.on("chatMessage", (msg: string) => {
    io.emit("message", msg);
  });

  // listen for event inn editor
  socket.on("editor", (val: string) => {
    io.emit("editor", val);
  });
});
