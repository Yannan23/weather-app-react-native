import { View, Text, Image } from 'react-native'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components/native'
import sun from '../../assets/images/partlycloudy.png'
import LottieView from 'lottie-react-native';

const CurrentWeather = () => {
    const animation = useRef < LottieView > (null);

    useEffect(() => {
        animation.current?.play();
    }, [])


    return (
        <Container>
            <Location>London,
                <Country> United Kingdom</Country>
            </Location>
            <LottieView autoPlay style={{ width: 250, height: 250, marginBottom: 0 }} source={require('/Users/yannansun/code/WeatherApp/src/assets/icons/lottie/clear-day.json')} />
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
    margin-top: 0;
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