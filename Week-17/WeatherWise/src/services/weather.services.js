const GET_STATE_URL = process.env.GET_STATE_URL 
const API_KEY = process.env.API_KEY
const FORECAST_URL = process.env.FORECAST_URL
const CURRENT_WEATHER_URL = process.env.CURRENT_WEATHER_URL

const fetchCityData = async (cityName) => {
    let response = await fetch(`${GET_STATE_URL}?q=${cityName}&appid=${API_KEY}`)
    return response.json()
}

const fetchWeatherData = async (lat, lon) => {
    let response = await fetch(`${CURRENT_WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    return response.json()
}

const fetchForecastData = async (lat, lon) => {
    let response = await fetch(`${FORECAST_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    return response.json()
}

module.exports = {
    fetchCityData,
    fetchWeatherData,
    fetchForecastData
}