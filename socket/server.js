const GameData = require("../server/models/GameData");
const playerData = require("../server/models/playerData");
//const gameStart, hasPlayerAnswered = require("./handlers")

const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("New client connected")
  socket.on('disconnect', () => console.log('disconnected'))
  socket.on("startGame", (arg) => {
    console.log(arg);
  });
  //socket.on("player:answer", hasPlayerAnswered);
});

httpServer.listen(3002, console.log("socket online"));
