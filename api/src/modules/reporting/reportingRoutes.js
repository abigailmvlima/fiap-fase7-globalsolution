import { Router } from 'express';
const router = Router();

import AnalyzeData from '../analyzeData/analyzeDataModel';
import { getLocalityFromCoordinates } from '../analyzeData/getLocalityFromCoordinates';

// Endpoint para receber denúncias da população
router.post('/report', async (req, res) => {
  try {
    const { coordinates, description, severityIndex } = req.body;
    if (!coordinates || !description || severityIndex === undefined) {
      return res.status(400).json({ error: 'Invalid report data' });
    }

    // Geocodificação reversa para obter localidade
    const [lng, lat] = coordinates;
    const locality = await getLocalityFromCoordinates(lat, lng);

    // Salvar denúncia no banco de dados
    const newReport = new AnalyzeData({
      locality,
      geographicLocation: {
        type: 'Point',
        coordinates: [lng, lat],
      },
      severityIndex,
      description,
      imageBase64: "", // Opcional: poderia incluir uma imagem fornecida pelo usuário
    });

    await newReport.save();
    res.json({ success: true });
  } catch (error) {
    console.error('Error reporting anomaly:', error);
    res.status(500).json({ error: 'An error occurred while reporting the anomaly' });
  }
});

export default router;
