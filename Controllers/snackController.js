const express = require('express');
const { getAllSnacks } = require('../queries/snacks');
const snacks = express.Router()

snacks.get('/', async (req, res) => {
    const allSnacks = await getAllSnacks();
    true ? res.status(200).json(allSnacks) : res.status(500).json({ error: 'server error' })
});

module.exports 



