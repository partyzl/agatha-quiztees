const axios = require("axios");
const GameData = require("../server/models/GameData");

const getUsernames = () => {
  return ["bob", "harry", "sarah", "beth"];
};

const getQuestions = async (settings) => {
  try {
    // const data = await axios.get(`https://opentdb.com/api.php?amount=${settings.amount}&category=${settings.category}&difficulty=${settings.difficulty}&type=${settings.type}`);
    const { data } = await axios.get(
      "https://opentdb.com/api.php?amount=10&category=&difficulty=&type="
    );
    const questionsArr = data.results;
    return questionsArr;
  } catch (err) {
    throw new Error("failed to fetch questions");
  }
};

const prepareQuiz = async (settings, socket) => {
  try {
    console.log("preparing");
    const usernames = getUsernames();
    const questions = await getQuestions(settings);
    const game = new GameData(settings, questions, usernames);
    console.log(game);
    socket.broadcast.emit("quiz:start", game.questions);
    return game;
  } catch (err) {
    console.log(err);
  }
};

const runTimer = (questionNum, socket) => {
  for (let j = 0; j < questionNum - 1; j++) {
    for (let i = 15; i > 0; i--) {
      setTimeout(() => socket.broadcast.emit("quiz:timer", i), 1000);
    }
  }
};
module.exports = {
  prepareQuiz,
  runTimer,
};
