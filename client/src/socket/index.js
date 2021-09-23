const io = require("socket.io-client");
const { quizStarted, incrementIndex } = require("./events");

const socket = io("http://localhost:3002");

function initSocket(settings) {
  const socket = io("http://localhost:3002");

  socket.on("connect", () => {
    console.log(socket.id);
  });

  // socket.on("quiz:waiting", waitingPlayers)
  // socket.on("quiz:preparing", quizPreparing)
  socket.on("quiz:start", (questions) => quizStarted(questions))
  socket.on("question:next", incrementIndex)
  // socket.on("question:timeout", questionTimeout)
  // socket.on("quiz:finished", finishQuiz)
}

module.exports = { initSocket, socket};