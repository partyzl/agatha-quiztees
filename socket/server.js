const GameData = require("../server/models/GameData");
const playerData = require("../server/models/playerData");
const {prepareQuiz} = require("./handlers")

const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const { builtinModules } = require("module");

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
 
  // socket.on('player:answer', playerAnswer)
  socket.on('quiz:prepare', (settings) => prepareQuiz(settings,socket))
  socket.on('disconnect', () => console.log('disconnected'))
});

httpServer.listen(3002, console.log("socket online"));
