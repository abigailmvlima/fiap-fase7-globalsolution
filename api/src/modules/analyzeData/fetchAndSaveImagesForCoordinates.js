import { fetchAndSaveImagesForCoordinate } from '../analyzeData/fetchAndSaveImagesForCoordinate';
import { analyzeLastImageOfDay } from '../analyzeData/analyzeLastImageOfDay';

export const fetchAndSaveImagesForCoordinates = async (coordinates) => {
    for (const coordinate of coordinates) {
      await fetchAndSaveImagesForCoordinate(coordinate);
    }
    // Após salvar as imagens, analisa a última imagem do dia mais recente no banco de dados
    await analyzeLastImageOfDay();
}