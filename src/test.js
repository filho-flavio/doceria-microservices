const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const testConnection = async () => {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Conexão bem-sucedida:', res.rows);
  } catch (err) {
    console.error('Erro de conexão:', err);
  }
};

testConnection();
