const { init } = require ('../dbConfig')

class Score {
    constructor(data){
    this.id = data.id
    this.username = data.username
    this.category = data.category
    // this.difficulty = data.difficulty
    this.score = data.score
}

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init()
                const scoreData = await db.query(`INSERT SQL HERE;`); //For when Tegan does the db
                const scores = scoreData.rowsmap(s => new Score({ ...s, id: s._id }))
                resolve(scores);
            } catch (err) {
                reject("No scores for you!")
            }
        })
    }

    static get byUserName() {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init()
                const scoreData = await db.query(`INSERT SQL HERE;`);
                // const scoresByUserName = scoreData
                resolve(scoresByUserName);
            } catch (err) {
                reject("Sorry! Couldn't get that Username!")
            }
    }

    static create (scores){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                const scoreData = await db.query(`INSERT INTO scores etc etc;`); //For when Tegan does the db
                let newScore = new Score(scoreData.rows[0]);
                resolve (newScore);
                console.log('Data Saved to Database');
            } catch (err) {
                reject('Error adding new scores');
            }
        });
    }
}

module.exports = Score;