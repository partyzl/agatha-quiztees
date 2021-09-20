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
      let scoresData = { username: "BowlOfSoup", score: 3 };
      jest
        .spyOn(db, "query")
        .mockResolvedValueOnce({ rows: [{ ...scoresData, id: 1 }] });
      const result = await Scores.create(scoresData);
      expect(result).toHaveProperty("username");
    });
  });
});
