// const serverless = require('serverless-http');
const express = require("express");
const cors = require("cors");
const router = require("./routes/router");

const server = express();

server.use(cors());
server.use(express.json());
server.use("/", router);

// Root
server.get("/", (req, res) => res.send("Greetings, traveller!!"));

module.exports = server;
