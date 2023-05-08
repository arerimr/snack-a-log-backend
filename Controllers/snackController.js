const express = require('express');
const snacks = express.Router()
const { getAllSnacks, getASnack, createSnack } = require('../queries/snacks');

snacks.get('/', async (req, res) => {
    const allSnacks = await getAllSnacks();
    allSnacks ? res.status(200).json(allSnacks) : res.status(500).json({ error: 'server error' })
});

snacks.get('/:id', async (req, res) => {
    const { id } = req.params;
    const snack = await getASnack(id)
    snack ? res.status(200).json(snack) : res.status(500).json({ error: 'server error' })
});

snacks.post('/', async (req, res) => {
    const newSnack = req.body
    const createdSnack = await createSnack(newSnack)
    createdSnack ? res.status(200).json(createdSnack) : res.status(500).json({ error: 'server error' })
});

module.exports = snacks;



