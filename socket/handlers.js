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
    socket.broadcast.emit("quiz:start", game.questions);
    return game;
  } catch (err) {
    console.log(err);
  }
};

const runTimer = (questionNum, socket) => {
  let timer = 15;
  let question = 1;
  setInterval(function () {
    socket.broadcast.emit("quiz:time", timer)
    if (timer > 0) {
      timer--
    } else if (timer == 0 && question < questionNum) {
      timer = 15;
      question++
    } else {

    }
    console.log(timer)
  }, 1000)
};




module.exports = {
  prepareQuiz,
  runTimer,
};
