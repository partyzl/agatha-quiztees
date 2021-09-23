const io = require("socket.io-client");
const { QuizStarted, incrementIdx, updateTimer } = require("./events");

const socket = io("http://localhost:3002");

function initSocket(settings) {
  const socket = io("http://localhost:3002");

  socket.on("connect", () => {
    console.log(socket.id);
  });

  // socket.on("quiz:waiting", waitingPlayers)
  // socket.on("quiz:preparing", quizPreparing)
  socket.on("quiz:start", (questions) => QuizStarted(questions));
  //socket.on("question:next", incrementIdx);



  socket.on("quiz:time", (timer) => updateTimer(timer));




  
  // socket.on("question:timeout", questionTimeout)
  // socket.on("quiz:finished", finishQuiz)
}

module.exports = { initSocket, socket };
