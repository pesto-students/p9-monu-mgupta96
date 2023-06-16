const { fetchCityData, fetchWeatherData } = require('../services/weather.services')

const getCityWeather = async (req, res) => {
    console.log("-------- FETCHING DATA OF SPECIFIC CITIES::", req.query.cityName);
    let citiesGeoData = await fetchCityData(req.query.cityName)
    let coords = []
    citiesGeoData.map(cg => {
        coords = [cg['lat'], cg['lon']]
    })

    let weatherData = await fetchWeatherData(...coords)
    res.send(weatherData)
}

const getMultipleCityWeather = async (req, res) => {
    let cityNames = req.query.cityNames.split(',')
    console.log("-------- FETCHING DATA OF MULTIPLE CITIES ----------", cityNames);
    let citiesGeoData = await Promise.all(cityNames.map(
        async (cn) => {
            return await await fetchCityData(cn)
        }
    ));
    let coords = []
    citiesGeoData.map(cg => {
        coords.push([cg[0]['lat'], cg[0]['lon']])
    })

    let getWeatherData = await Promise.all(coords.map(
        async (cn) => {
            return await fetchWeatherData(...cn)
        }
    ));
    res.send(getWeatherData)
}

module.exports = {
    fetchWeatherData,
    getCityWeather,
    getMultipleCityWeather
}