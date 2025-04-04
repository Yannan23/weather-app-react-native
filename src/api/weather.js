// import { WEATHER_APIKEY, OPENWEATHER_APIKEY } from '@env'

const forecastEndpoint = params => `http://api.openweathermap.org/data/2.5/forecast?q=${params.cityName}&appid=f41a578a9923bae4d1441002d67bec52`
const locationsEndpoint = params => `http://api.weatherapi.com/v1/search.json?key=5e563f80f5094339a8d63728252502&q=${params.cityName} `

const apiCall = async (endpoint) => {
    try {
        const response = await fetch(endpoint)
        const data = await response.json()
        console.log(data);
    } catch (e) {
        console.log('Error:', e);
    }
}

export const fetchWeatherForecast = (params) => {
    const forecastUrl = forecastEndpoint(params)
    return apiCall(forecastUrl)
}

export const fetchLocations = (params) => {
    const locationsUrl = locationsEndpoint(params)
    return apiCall(locationsUrl)
}