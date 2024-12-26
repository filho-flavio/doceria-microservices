const express = require('express');
const sensorRoutes = require('./routes/sensorRoutes');
const errorHandler = require('./middlewares/errorHandler');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', sensorRoutes);
app.use(errorHandler);

module.exports = app;
