import { View, Text, Image } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import sun from '../../assets/images/partlycloudy.png'

const CurrentWeather = () => {
    return (
        <Container>
            <Location>London,
                <Country> United Kingdom</Country>
            </Location>
            <WeatherImage source={sun} />
            <TempText>21°C</TempText>
            <WeatherText>thunderstorm</WeatherText>
            <Date>Friday 16 . 09.41am</Date>
        </Container>
    )
}

export default CurrentWeather

const Country = styled.Text`
    font-size: 18px;
`
const Location = styled.Text`
    font-size: 28px;
    font-weight:bold;
    color:white;
`
const TempText = styled.Text`
    font-family: 'Saira_Expanded-SemiBold';
    color: white;
    font-size: 68px;
    padding: 0 0;
`
const WeatherText = styled.Text`
    color: white;
    text-transform:uppercase;
    font-weight:bold;
`
const Date = styled.Text`
    color: white;
    opacity: 0.6;
    font-family: 'Saira_Expanded-Thin';
`
const Container = styled.View`
    margin: auto;
    margin-top:12px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const WeatherImage = styled.Image`
    margin-top: 25px;
    height: 200px;
    width: 200px;
`