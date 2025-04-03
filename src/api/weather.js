import { WEATHER_APIKEY, OPENWEATHER_APIKEY } from '@env'

const forecastEndpoint = params => `http://api.openweathermap.org/data/2.5/forecast?q=${params.cityName}&appid=${OPENWEATHER_APIKEY}`

const apiCall = async (endpoint) => {
    try {
        const response = await fetch(endpoint)
        const data = await response.json()
        console.log(data.list);
    } catch (e) {
        console.log('Error:', e);
    }
}

export const fetchWeatherForecast = (params) => {
    const forecastUrl = forecastEndpoint(params)
    return apiCall(forecastUrl)
}
