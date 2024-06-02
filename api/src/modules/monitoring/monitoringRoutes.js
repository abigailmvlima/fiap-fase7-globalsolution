import { Router } from 'express';
import AnalyzeData from '../analyzeData/analyzeDataModel';

const router = Router();

// Endpoint para recuperar anomalias
router.get('/anomalies', async (req, res) => {
  try {
    const anomalies = await AnalyzeData.find();
    res.json(anomalies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the anomalies' });
  }
});

// Endpoint para listar localidades monitoradas
router.get('/localities', async (req, res) => {
  try {
    const localities = await AnalyzeData.aggregate([
      {
        $group: {
          _id: '$locality',
          items: {
            $push: {
              id: '$id',
              severityIndex: '$severityIndex',
              description: '$description',
              geographicLocation: '$geographicLocation',
              imageBase64: '$imageBase64',
              timestamp: '$timestamp',
            },
          },
        },
      },
    ]);
    res.json(localities);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the localities' });
  }
});

export default router;
