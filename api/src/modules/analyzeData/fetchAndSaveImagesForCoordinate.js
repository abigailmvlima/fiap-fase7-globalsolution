import axios from 'axios'
import AnalyzeData  from './analyzeDataModel'
import { getLocalityFromCoordinates }  from './getLocalityFromCoordinates'

export const fetchAndSaveImagesForCoordinate = async (coordinate) => {
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
                coordinates: coordinate,
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
          Authorization: `api-key ${PLANET_API_KEY}`,
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
            Authorization: `api-key ${PLANET_API_KEY}`,
          },
        });
  
        const imageBuffer = imageResponse.data;
  
        // Converter a imagem para base64
        const imageBase64 = Buffer.from(imageBuffer).toString('base64');
  
        // Extrair a localidade das coordenadas
        const [lng, lat] = image.geometry.coordinates;
        const locality = await getLocalityFromCoordinates(lat, lng);
  
        // Salvar no MongoDB
        const newAnalyzeData = new AnalyzeData({
          id: image.id,
          locality,
          geographicLocation: {
            type: 'Point',
            coordinates: [lng, lat],
          },
          imageBase64,
        });
  
        await newAnalyzeData.save();
      }
    } catch (error) {
      console.error('Error fetching or saving images for coordinate:', error);
    }
  }
  