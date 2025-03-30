import { View, Text } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import HourlyWeather from './components/HourlyWeather'
import OtherDetails from './components/OtherDetails'

const WeatherDetails = () => {
    return (
        <Container>
            <Text>WeatherDetails</Text>
            <HourlyWeather />
            <OtherDetails />
        </Container>
    )
}

export default WeatherDetails

const Container = styled.View`
    margin: auto;
`
