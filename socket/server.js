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
  //socket.on("connected", console.log(socket.connected));
  //socket.on("player:answer", hasPlayerAnswered);
});

httpServer.listen(3002, console.log("socket online"));
