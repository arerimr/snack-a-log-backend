const express = require('express');
const snacks = express.Router()
const { getAllSnacks, getASnack, createSnack, deleteSnack, updateSnack } = require('../queries/snacks');

snacks.get('/', async (req, res) => {
    const allSnacks = await getAllSnacks();
    allSnacks ? res.status(200).json(allSnacks) : res.status(500).json({ error: 'server error' })
});

snacks.get('/:id', async (req, res) => {
    const { id } = req.params;
    const snack = await getASnack(id)
    snack ? res.status(200).json(snack) : res.status(500).json({ error: 'server error' })
});

snacks.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const updatedSnack = await updateSnack(id, body);
        res.status(200).json(updatedSnack);
    } catch (error) {
        res.status(400).json({ error: error });
    }
})

snacks.post('/', async (req, res) => {
    const newSnack = req.body
    const createdSnack = await createSnack(newSnack)
    createdSnack ? res.status(200).json(createdSnack) : res.status(500).json({ error: 'server error' })
});

snacks.delete('/:id', async (req, res) => {
    const { id } = req.params
    const deletedSnack = await deleteSnack(id)
    deletedSnack ? res.status(200).json(deletedSnack) : res.status(500).json({ error: 'server error' })
});

module.exports = snacks;



