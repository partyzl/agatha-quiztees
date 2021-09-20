const { request } = require("../../server");

describe("Score Endpoints", () => {
  let api;

  beforeAll(() => {
    api = server.listen(5000, () =>
      console.log("Test server running on port 5000")
    );
  });

  beforeEach(async () => {
    await resetTestDB();
  });

  afterAll((done) => {
    console.log("Stopping test server");
    api.close(done);
  });

  test("responds to get / with 200", async () => {
    const res = await request(api).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("Greetings, traveller!!");
  });

  test("returns all scores on leaderboard", async () => {
    const res = await request(api).get("/leaderboard");
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toEqual(6);
  });

  test("returns fake endpoints with 404", async () => {
    const res = await request(api).get("/sadtest");
    expect(res.statusCode).toEqual(404);
  });

  test("creates a new score", async () => {
    const scoreData = {
      username: "test",
      category: "testy",
      score: "69",
    };
    const res = await request(api).post("/leaderboard").send(scoreData);
    expect(res.statusCode).toEqual(201);
  });
});
