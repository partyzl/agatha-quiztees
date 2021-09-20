const Score = require("../../../models/Scores");
const db = require("../../../dbConfig");
const pg = require("pg");
jest.mock("pg");

describe("Scores", () => {
  beforeEach(() => jest.clearAllMocks());

  afterAll(() => jest.resetAllMocks());

  describe("all", () => {
    test("it resolves with all scores data on successful request to db", async () => {
      jest
        .spyOn(db, "query")
        .mockResolvedValueOnce({ rows: [{}, {}, {}, {}, {}] });
      const all = await Score.all;
      expect(all).toHaveLength(5);
    });

    test("returns error when fails to get scores", async () => {
      try {
        jest.spyOn(db, "query").mockRejectedValueOnce(Error());
        await Score.all;
      } catch (err) {
        expect(err).toContain("No scores for you!Error");
      }
    });
  });

  describe("create", () => {
    test("it resolves with scores data on successful db enquiry", async () => {
      let scoresData = { username: "BowlOfSoup", category: "test", score: 3 };
      let scoreID = { ...scoresData, id: 12 };
      jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [scoreID] });
      const result = await Score.create(scoresData);

      expect(result).toBeInstanceOf(Score);
      expect(result.id).toEqual(12);
      expect(result.username).toEqual("BowlOfSoup");
      expect(result.category).toEqual("test");
      expect(result.score).toEqual(3);
      expect(result).toHaveProperty("username");
    });

    // describe("test filter by username", () => {
    //   test("returns scores with particular username", async () => {
    //     const scoreData = { username: "test", category: "soup", score: 69 };
    //     const username = scoreData.username;
    //     jest.spyOn(db, "query").mockResolvedValueOnce({ rows: [scoreData] });

    //     const user = await Score.findByUsername(username);

    //     expect(user).toBeInstanceOf(Score);
    //     //expect(user.id).toEqual(7);
    //     expect(user.username).toEqual("test");
    //     expect(user.category).toEqual(soup);
    //     expect(user.score).toEqual(69);
    //   });
    // });
  });
});
