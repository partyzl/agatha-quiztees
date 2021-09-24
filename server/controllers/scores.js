const Score = require("../models/Scores");

// All Scores route
async function index(req, res) {
  try {
    const scores = await Score.all;
    res.status(200).json({ scores });
  } catch (err) {
    res.status(500).json({ err });
  }
}

// Create score route
async function create(req, res) {
  try {
    const scores = await Score.create(req.body);
    res.status(201).json(scores);
  } catch (err) {
    res.status(500).json({ err });
  }
}

module.exports = {
  index,
  create,
};
