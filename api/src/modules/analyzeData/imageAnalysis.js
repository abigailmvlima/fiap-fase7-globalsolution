import tf from '@tensorflow/tfjs-node';

// Carregar o modelo treinado
const loadModel = async () => {
  const model = await tf.loadLayersModel('./modelTraining.json');
  return model;
}

// Função para analisar a imagem e identificar anomalias
export const analyzeImage = async (imageBuffer) => {
  const model = await loadModel();

  // Pré-processar a imagem
  const imageTensor = tf.node.decodeImage(imageBuffer);
  const resizedImage = tf.image.resizeBilinear(imageTensor, [224, 224]); // Ajuste o tamanho conforme necessário
  const normalizedImage = resizedImage.div(tf.scalar(255));
  const batchedImage = normalizedImage.expandDims(0); // Adicionar dimensão de batch

  // Fazer a previsão
  const predictions = model.predict(batchedImage);

  // Suponha que a saída seja um vetor de probabilidades de anomalias
  const anomalies = Array.from(predictions.dataSync()).map((prob, index) => ({
    type: `anomaly_${index + 1}`,
    confidence: prob,
  }));

  // Calcular um índice de gravidade e descrição com base nas previsões
  const severityIndex = anomalies.reduce((acc, anomaly) => acc + anomaly.confidence, 0) / anomalies.length;
  const description = `Anomalias detectadas: ${anomalies.filter(a => a.confidence > 0.5).map(a => a.type).join(', ')}`;

  return { anomalies, severityIndex, description };
}
