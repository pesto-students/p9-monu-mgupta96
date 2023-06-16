// Creates an Express application. 
const express = require("express")

// The app object conventionally denotes the Express application. 
// Create it by calling the top-level express() function exported by the Express module:
const app = express()

// Load app configs
const {
    CURRENT_WEATHER_URL,
    GET_STATE_URL,
    FORECAST_URL,
    API_KEY
} = require('./config/app.config')

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(3000)

const fetchWeatherData = async (lat, lon) => {
    let response = await fetch(`${CURRENT_WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    return response.json()
}

const fetchCityData = async (cityName) => {
    let response = await fetch(`${GET_STATE_URL}?q=${cityName}&appid=${API_KEY}`)
    return response.json()
}

//! Current weather condition of any particular city
app.get('/city', async (req, res) => {
    console.log("-------- FETCHING DATA OF SPECIFIC CITIES::", req.query.cityName);
    let citiesGeoData = await fetchCityData(req.query.cityName)
    let coords = []
    citiesGeoData.map(cg => {
        coords = [cg['lat'], cg['lon']]
    })

    let weatherData = await fetchWeatherData(...coords)
    res.send(weatherData)
})

//! Returns weather data of multiple cities
app.get('/cities', async (req, res) => {
    let cityNames = req.query.cityNames.split(',')
    console.log("-------- FETCHING DATA OF MULTIPLE CITIES ----------", cityNames);
    let citiesGeoData = await Promise.all(cityNames.map(
        async (cn) => {
            return await fetch(`${GET_STATE_URL}?q=${cn}&appid=${API_KEY}`).then(response => response.json())
        }
    ));
    console.log(citiesGeoData);
    let coords = []
    citiesGeoData.map(cg => {
        coords.push([cg[0]['lat'], cg[0]['lon']])
    })

    let getWeatherData = await Promise.all(coords.map(
        async (cn) => {
            let response = await fetch(`${CURRENT_WEATHER_URL}?lat=${cn[0]}&lon=${cn[1]}&appid=${API_KEY}`)
            return response.json()
        }
    ));
    res.send(getWeatherData)
})

//! Current weather condition of any particular city
app.get('/forecast', async (req, res) => {
    console.log("-------- FETCHING FORECAST OF CITY ::", req.query.cityName);
    let citiesGeoData = await fetchCityData(req.query.cityName)
    let coords = []
    citiesGeoData.map(cg => {
        coords = [cg['lat'], cg['lon']]
    })

    let getForecastData = await fetch(`${FORECAST_URL}?lat=${coords[0]}&lon=${coords[1]}&appid=${API_KEY}`).then(response => response.json());
    res.send(getForecastData)
})