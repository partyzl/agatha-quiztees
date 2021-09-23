class playerData {
  constructor(username) {
    this.username = username;
    this.answers = [];
    this.score = 0;
  }
}


const genPlayers = (playersArr) => {
  const array = playersArr.map(username => new playerData(username))
  return array
}

module.exports = { genPlayers }