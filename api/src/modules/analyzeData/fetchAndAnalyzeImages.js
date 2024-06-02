import axios from 'axios'
import { analyzeImage } from './analyzeImage'
import AnalyzeData from './analyzeDataModel'

export const fetchAndAnalyzeImages = async () => {
  try {
    const params = {
      item_types: ['PSScene4Band'],
      filter: {
        type: 'AndFilter',
        config: [
          {
            type: 'GeometryFilter',
            field_name: 'geometry',
            config: {
              type: 'Point',
              coordinates: [102.0, 17.0], // Substitua pelas coordenadas desejadas
            },
          },
          {
            type: 'DateRangeFilter',
            field_name: 'acquired',
            config: {
              gte: new Date(new Date().getTime() - 10 * 60 * 1000).toISOString(), // Últimos 10 minutos
              lte: new Date().toISOString(),
            },
          },
        ],
      },
    };

    const response = await axios({
      url: `${process.env.PLANET_URL}/data/v1/quick-search`,
      method: 'POST',
      headers: {
        Authorization: `api-key ${process.env.PLANET_API_KEY}`,
        'Content-Type': 'application/json',
      },
      data: params,
    });

    const images = response.data.features;

    for (const image of images) {
      const imageUrl = image._links.assets['analytic'].href;

      // Baixar a imagem
      const imageResponse = await axios.get(imageUrl, {
        responseType: 'arraybuffer',
        headers: {
          Authorization: `api-key ${process.env.PLANET_API_KEY}`,
        },
      });

      const imageBuffer = imageResponse.data;

      // Analisar a imagem
      const { anomalies, severityIndex, description } = await analyzeImage(imageBuffer);

      // Converter a imagem para base64
      const imageBase64 = Buffer.from(imageBuffer).toString('base64');

      // Salvar no MongoDB
      const newAnalyzeData = new AnalyzeData({
        id: image.id,
        locality: 'Localidade Exemplo', // Substitua pela lógica de extração da localidade, se disponível
        geographicLocation: {
          type: 'Point',
          coordinates: image.geometry.coordinates,
        },
        severityIndex,
        description,
        imageBase64,
      });

      await newAnalyzeData.save();
    }
  } catch (error) {
    console.error('Error fetching or analyzing images:', error);
  }
}


