import { Router } from 'express';
import { fetchAndSaveImagesForCoordinates } from '../analyzeData/fetchAndSaveImagesForCoordinates';
const router = Router();

// Endpoint para iniciar a análise para uma lista de coordenadas enviada via POST
router.post('/analyze', async (req, res) => {
  try {
    const coordinates = req.body.coordinates;
    if (!Array.isArray(coordinates) || coordinates.length === 0) {
      return res.status(400).json({ error: 'Invalid coordinates list' });
    }
    await fetchAndSaveImagesForCoordinates(coordinates);
    res.json({ success: true });
  } catch (error) {
    console.error('Error analyzing images for coordinates:', error);
    res.status(500).json({ error: 'An error occurred while analyzing the images' });
  }
});

export default router;
