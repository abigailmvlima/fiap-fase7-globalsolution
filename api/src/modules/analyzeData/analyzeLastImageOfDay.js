import AnalyzeData from './analyzeDataModel'
import { analyzeImage } from './imageAnalysis'

export const analyzeLastImageOfDay = async () => {
    try {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
  
      const lastImage = await AnalyzeData.findOne({
        timestamp: { $gte: today }
      }).sort({ timestamp: -1 });
  
      if (lastImage) {
        const imageBuffer = Buffer.from(lastImage.imageBase64, 'base64');
        const { anomalies, severityIndex, description } = await analyzeImage(imageBuffer);
  
        // Atualizar a entrada no banco de dados com os resultados da análise
        lastImage.severityIndex = severityIndex;
        lastImage.description = description;
        lastImage.anomalies = anomalies;
        await lastImage.save();
      } else {
        console.log('No images found in the database for today.');
      }
    } catch (error) {
      console.error('Error analyzing last image of the day:', error);
    }
  }
  