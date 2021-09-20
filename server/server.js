// const serverless = require('serverless-http');
const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json());

const scoreRoutes = require("./controllers/scores");

server.use("/leaderboard", scoreRoutes);

// Root
server.get("/", (req, res) => res.send("Greetings, traveller!!"));

module.exports = server;
// (!!base_url)? module.exports.handler = serverless(server): module.exports = server;
