import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import CurrentWeather from '../components/CurrentWeather'
import WeatherDetails from '../components/WeatherDetails'
import NextDaysButton from '../components/NextDaysButton'

const Index = () => {
    return (
        <View>
            <Header />
            <CurrentWeather />
            <NextDaysButton />
            <WeatherDetails />
        </View>
    )
}

export default Index