import socketio from "socket.io-client";

export const socket_global = socketio("ws://localhost:8900");
