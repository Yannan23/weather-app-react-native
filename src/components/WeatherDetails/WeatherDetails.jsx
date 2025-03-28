import { View, Text } from 'react-native'
import React from 'react'
import HourlyWeather from './components/HourlyWeather'
import OtherDetails from './components/OtherDetails'

const WeatherDetails = () => {
    return (
        <View>
            <Text>WeatherDetails</Text>
            <HourlyWeather />
            <OtherDetails />
        </View>
    )
}

export default WeatherDetails