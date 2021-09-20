const express = require('express');
const router = express.Router();

const Score = require('../models/Scores')

// All Scores route
router.get('/', async (req, res) => {
    try {
        const scores = await Score.all
        res.status(200).json({scores});
    } catch(err) {
        res.status(500).json({err})
    }
})

// Usernane show route
router.get('/:id', async (req, res) => {
    try {
        const scoresByUserName = await Score.findById(parseInt(req.params.id))
        res.json({scoresByUserName})
    } catch(err) {
        res.status(404).json({err})
    }
})

// Create score route
router.post('/', async (req, res) => {
    try {
        const scores = await Score.create(req.body.scores)
        res.status(201).json(scores);
    } catch (err) {
        res.status(500).json({ err });
    }
});

module.exports = router;