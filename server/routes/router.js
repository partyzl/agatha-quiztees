const router = require("express").Router();
const { index, create } = require("../controllers/scores");

router.get("/leaderboard", index);
router.post("/leaderboard", create);

module.exports = router;
