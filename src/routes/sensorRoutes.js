const express = require('express');
const { saveSensorData } = require('../controllers/sensorController');
const router = express.Router();

router.post('/sensordata', saveSensorData);
router.get('/getsensordata')

module.exports = router;
