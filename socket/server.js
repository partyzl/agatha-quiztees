const io = require("socket.io")(3002);

io.on("connection", (socket) => {
  console.log(socket.id);
});
