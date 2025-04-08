// // import { WEATHER_APIKEY, OPENWEATHER_APIKEY } from '@env'

export const fetchLocations = async (params) => {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/search.json?key=5e563f80f5094339a8d63728252502&q=${params.cityName}`)
        const data = await response.json()
        return data
    } catch (err) {
        console.log('err:', err);
    }
}

export const fetchCoordinates = async (params) => {
    try {
        const response = fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${params.cityName}&limit=5&appid=f41a578a9923bae4d1441002d67bec52`)
        const data = (await response).json()
        return data
    } catch (err) {
        console.log('err:', err);
    }
}

export const fetchWeatherForecast = async (params) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${params.lat}&lon=${params.lon}&appid=f41a578a9923bae4d1441002d67bec52`)
        const data = await response.json()
        // console.log(data);
        return data
    } catch (err) {
        console.log('err:', err);
    }
}

export const fetchWeatherOverview = async (params) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall/overview?lon=${params.lon}&lat=${params.lat}&appid=f41a578a9923bae4d1441002d67bec52`)
        const data = await response.json()
        return data
    } catch (err) {
        console.log('err:', err);
    }
}