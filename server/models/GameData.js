const {genPlayers} = require('./playerData')

class GameData {
  constructor(settings, questions, playersArr) {
    this.settings = settings;
    this.currentIdx = 0;
    this.questions = questions;
    this.playersArr = genPlayers(playersArr);
  }
}


module.exports = GameData;
