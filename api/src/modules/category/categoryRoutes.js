import express from 'express';
import { createCategory, getAllCategory, getCategoryById, updateCategory, deleteCategory } from './categoryServices.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const movie = await createCategory(req.body);
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const result = await getAllCategory();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const result = await getCategoryById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const result = await updateCategory(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const result = await deleteCategory(req.params.id);
    res.status(200).json({ message: 'result deleted successfully', result });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
