import express from 'express';
import Animal from './animalModel';

const router = express.Router();

// GET all animals
router.get('/', async (req, res) => {
    try {
        const animals = await Animal.find();
        res.json(animals);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new animal
router.post('/', async (req, res) => {
    const animal = new Animal({
        name: req.body.name,
        species: req.body.species
    });

    try {
        const newAnimal = await animal.save();
        res.status(201).json(newAnimal);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PUT update an existing animal
router.put('/:id', async (req, res) => {
    try {
        const updatedAnimal = await Animal.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedAnimal);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE an animal
router.delete('/:id', async (req, res) => {
    try {
        await Animal.findByIdAndRemove(req.params.id);
        res.json({ message: 'Animal deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
