import { socket } from "..";

const startGame = (data) => {
    console.log('should log')
    socket.emit("startGame", data)
}

export {startGame}