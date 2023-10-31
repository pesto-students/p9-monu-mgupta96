const { fetchCityData, fetchForecastData } = require('../services/weather.services')

const getForecastByCity = async (req, res) => {
    console.log("-------- FETCHING FORECAST OF CITY ::", req.query.cityName);
    let citiesGeoData = await fetchCityData(req.query.cityName)
    console.log(citiesGeoData);
    let coords = []
    citiesGeoData.map(cg => {
        coords = [cg['lat'], cg['lon']]
    })

    let getForecastData = await fetchForecastData(...coords)
    res.send(getForecastData)
}

module.exports = {
    getForecastByCity
}