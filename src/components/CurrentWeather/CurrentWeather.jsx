import { View, Text, Image } from 'react-native'
import React from 'react'
import styled from 'styled-components'
import sun from '../../assets/images/sun.png'

const CurrentWeather = () => {
    return (
        <Container>
            <WeatherImage source={sun} />
            <TempText>21°C</TempText>
            <WeatherText>THUNDERSTORM</WeatherText>
            <Date>Friday 16 . 09.41am</Date>
        </Container>
    )
}

export default CurrentWeather

const TempText = styled.Text`
    color: white;
    font-size: 68px;
`
const WeatherText = styled.Text`
        color: white;
`
const Date = styled.Text`
    color: white;
    opacity: 0.5;
`
const Container = styled.View`
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const WeatherImage = styled.Image`
    margin-top: 20px;
    height: 250px;
    width: 250px;
`