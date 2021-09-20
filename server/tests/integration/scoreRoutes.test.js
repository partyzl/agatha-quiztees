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
});
