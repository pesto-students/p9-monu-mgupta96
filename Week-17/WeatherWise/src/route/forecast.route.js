const express = require('express')
const router = express.Router()

// Import controllers
const forecastController = require('../controllers/forecast.controller');

//! Current forecast of any particular city
router.get('/forecast', forecastController.getForecastByCity)

module.exports = router