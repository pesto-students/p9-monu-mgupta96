const express = require('express')
const router = express.Router()

// Import controllers
const weatherController = require('../controllers/weather.controller');

router.get('/', (req, res) => res.send("Hello World"))

//! Current weather condition of any particular city
router.get('/city', weatherController.getCityWeather)

//! Returns weather data of multiple cities
router.get('/cities', weatherController.getMultipleCityWeather)

module.exports = router