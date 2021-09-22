import { io } from "socket.io-client";

function init() {
  const socket = io("http://localhost:3002");

  socket.on("connect", () => {
    console.log(socket.id);
  });
}
export default init;
