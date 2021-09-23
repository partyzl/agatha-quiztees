import { io } from "socket.io-client";

const socket = io("http://localhost:3002");

function initSocket(settings) {
  const socket = io("http://localhost:3002");

  socket.on("connect", () => {
    console.log(socket.id);
    socket.emit("quiz:prepare", settings)
  });

  // socket.on("quiz:waiting", waitingPlayers)
  // socket.on("quiz:preparing", quizPreparing)
  // socket.on("quiz:started", startQuiz)
  // socket.on("question:next", nextQuestion)
  // socket.on("question:timeout", questionTimeout)
  // socket.on("quiz:finished", finishQuiz)
}
export { initSocket, socket};