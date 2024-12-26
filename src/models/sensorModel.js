const pool = require('../config/database');

const insertData = async (sensorId, location, temperature, humidity) => {
  const query = `
    INSERT INTO sensor_data (sensor_id, location, temperature, humidity, timestamp) 
    VALUES ($1, $2, $3, $4, NOW())
  `;
  try {
    await pool.query(query, [sensorId, location, temperature, humidity]);
    console.log('Dados inseridos com sucesso!');
  } catch (error) {
    console.error('Erro ao inserir dados no banco:', error);
    throw error;
  }
};

module.exports = { insertData };
