const pool = require('../config/database');

const insertData = async (data) => {
  const query = `
    INSERT INTO sensor_data (
      data,
      hora,
      planta,
      sensor,
      temperatura_ar,
      umidade_ar,
      umidade_solo
    ) VALUES ($1, $2, $3, $4, $5, $6, $7)
  `;
  
  try {
    for (const entry of data) {
      const {
        Data,
        Hora,
        Planta,
        Sensor,
        "Temperatura_Ar (°C)": TemperaturaAr,
        "Umidade_Ar (%)": UmidadeAr,
        "Umidade_Solo (%)": UmidadeSolo
      } = entry;

      await pool.query(query, [
        Data,
        Hora,
        Planta,
        Sensor,
        TemperaturaAr,
        UmidadeAr,
        UmidadeSolo
      ]);
    }

    console.log('Dados inseridos com sucesso!');
  } catch (error) {
    console.error('Erro ao inserir dados no banco:', error);
    throw error;
  }
};

module.exports = { insertData };
