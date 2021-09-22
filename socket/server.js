const GameData = require("../server/models/GameData");
const playerData = require("../server/models/playerData");
const gameStart, hasPlayerAnswered = require("./handlers")

import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("game:start", gameStart);
  socket.on("player:answer", hasPlayerAnswered);
});

httpServer.listen(3002);
