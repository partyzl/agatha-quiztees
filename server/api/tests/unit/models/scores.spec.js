const Score = require('../../../models/Scores');
const db = require('../../../dbConfig')
const pg = require('pg');
jest.mock('pg');

describe('Scores', () => {
    
  beforeEach(() => jest.clearAllMocks())
    
    afterAll(() => jest.resetAllMocks())

    describe('all', () => {
        test('it resolves with all scores data on successful request to db', async () => {
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({ rows: {...scores}});
            const all = await Score.all
            expect(all).toHaveLength(1) 
        })
    });

    })

    describe('create', () => {
        test('it resolves with scores data on successful db enquiry', async () => {
            let scoresData = { username: 'BowlOfSoup', score: 3 }
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [ { ...scoresData, id: 1 }] });
            const result = await Scores.create(scoresData);
            expect(result).toHaveProperty('username')
        })
    });
    