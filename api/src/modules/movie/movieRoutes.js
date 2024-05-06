import express from 'express';
import { createMovie, getAllMovies, getMovieById, updateMovie, deleteMovie } from './movieServices.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const movie = await createMovie(req.body);
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const movies = await getAllMovies();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const movie = await getMovieById(req.params.id);
    res.status(200).json(movie);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const movie = await updateMovie(req.params.id, req.body);
    res.status(200).json(movie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const movie = await deleteMovie(req.params.id);
    res.status(200).json({ message: 'Movie deleted successfully', movie });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
