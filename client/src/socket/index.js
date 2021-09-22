import { io } from "socket.io-client";

const socket = io("http://localhost:3002");

function initSocket() {
  const socket = io("http://localhost:3002");

  socket.on("connect", () => {
    console.log(socket.id);
  });
}
export { initSocket, socket};
