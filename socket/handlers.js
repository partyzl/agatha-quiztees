const axios = require("axios");
const {io }= require('./server')
const GameData = require("../server/models/GameData");


let game;

const getUsernames = () => {
  return ['bob', 'harry', 'sarah', 'beth']
}

const getQuestions = async (settings) => {
  try {
      // const data = await axios.get(`https://opentdb.com/api.php?amount=${settings.amount}&category=${settings.category}&difficulty=${settings.difficulty}&type=${settings.type}`);
      const {data} = await axios.get('https://opentdb.com/api.php?amount=10&category=&difficulty=&type=')
      const questionsArr = data.results;
      return questionsArr;
  } catch (err) {
      throw new Error('failed to fetch questions');
  }
}


const prepareQuiz = async (settings, socket) => {
  try{
    console.log('preparing')
    const usernames = getUsernames()
    const questions = await getQuestions(settings)
    game = new GameData(settings, questions, usernames)
    console.log(game)
    socket.broadcast.emit('quiz:start', game.questions)
  }catch(err){
    console.log(err)
  }
}

module.exports = {
 prepareQuiz
};
