const SensorModel = require('../models/sensorModel');

const saveSensorData = async (req, res) => {
  const { temperature, humidity, sensor_id, location } = req.body;

  // Verificação básica de campos obrigatórios
  if (!temperature || !humidity || !sensor_id || !location) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios!' });
  }

  // Verificação de tipo e valores de temperature e humidity
  if (isNaN(temperature) || isNaN(humidity)) {
    return res.status(400).json({ message: 'Temperature e Humidity devem ser números válidos!' });
  }

  if (temperature < -50 || temperature > 50) {
    return res.status(400).json({ message: 'Temperature fora do intervalo válido (-50°C a 50°C)!' });
  }

  if (humidity < 0 || humidity > 100) {
    return res.status(400).json({ message: 'Humidity fora do intervalo válido (0% a 100%)!' });
  }

  try {
    // Chama o método do modelo para salvar os dados
    await SensorModel.insertData(sensor_id, location, temperature, humidity);
    res.status(201).json({ message: 'Dados salvos com sucesso!' });
  } catch (error) {
    console.error('Erro ao salvar dados no banco:', error);
    res.status(500).json({ message: 'Erro ao salvar dados!' });
  }
};

module.exports = { saveSensorData };
