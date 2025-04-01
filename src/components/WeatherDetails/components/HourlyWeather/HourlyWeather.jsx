import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import styled, { useTheme } from 'styled-components/native'
import { CalendarDaysIcon, ChevronDownIcon } from 'react-native-heroicons/solid'

const HourlyWeather = () => {
    const theme = useTheme()
    return (
        <WeatherDetails>
            <TodayView>
                <CalendarDaysIcon size={25} color='white' />
                <Today>Today</Today>
            </TodayView>
            <ScrollView horizontal contentContainerStyle={{ paddingHorizontal: 15, gap: 8 }} showsHorizontalScrollIndicator={false}>
                <WeatherView>
                    <Time>Now</Time>
                    <LottieView autoPlay style={{ width: 30, height: 30 }} source={require('../../../../assets/icons/lottie/clear-day.json')} />
                    <Temp>19°C</Temp>
                </WeatherView>
                <WeatherView>
                    <Time>7am</Time>
                    <LottieView autoPlay style={{ width: 30, height: 30 }} source={require('../../../../assets/icons/lottie/clear-day.json')} />
                    <Temp>19°C</Temp>
                </WeatherView>
                <WeatherView>
                    <Time>8am</Time>
                    <LottieView autoPlay style={{ width: 30, height: 30 }} source={require('../../../../assets/icons/lottie/clear-day.json')} />
                    <Temp>19°C</Temp>
                </WeatherView>
                <WeatherView>
                    <Time>9am</Time>
                    <LottieView autoPlay style={{ width: 30, height: 30 }} source={require('../../../../assets/icons/lottie/clear-day.json')} />
                    <Temp>19°C</Temp>
                </WeatherView>
                <WeatherView>
                    <Time>10am</Time>
                    <LottieView autoPlay style={{ width: 30, height: 30 }} source={require('../../../../assets/icons/lottie/clear-day.json')} />
                    <Temp>19°C</Temp>
                </WeatherView>
                <WeatherView>
                    <Time>Now</Time>
                    <LottieView autoPlay style={{ width: 30, height: 30 }} source={require('../../../../assets/icons/lottie/clear-day.json')} />
                    <Temp>19°C</Temp>
                </WeatherView>
                <WeatherView>
                    <Time>Now</Time>
                    <LottieView autoPlay style={{ width: 30, height: 30 }} source={require('../../../../assets/icons/lottie/clear-day.json')} />
                    <Temp>19°C</Temp>
                </WeatherView>
                <WeatherView>
                    <Time>Now</Time>
                    <LottieView autoPlay style={{ width: 30, height: 30 }} source={require('../../../../assets/icons/lottie/clear-day.json')} />
                    <Temp>19°C</Temp>
                </WeatherView>
            </ScrollView>
            <Details>
                <DetailsText>More details</DetailsText>
                <ChevronDownIcon size={20} color={theme.bgWhite(0.8)} />
            </Details>
        </WeatherDetails>
    )
}

export default HourlyWeather

const WeatherDetails = styled.View`
    gap: 12px;
`
const TodayView = styled.View`
    display: flex;
    flex-direction: row; 
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 8px 16px;
    gap: 8px;
`
const Today = styled.Text`
    color: white;
    font-family: 'Saira-Regular';
    font-size: 16px;
`
const WeatherView = styled.View`
    border-radius: 8px;
    min-width: 80px;
    padding: 8px 16px;
    gap: 8px;
    background-color: ${(props) => props.theme.bgWhite(0.1)} ;
    min-height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Time = styled.Text`
    color: white;
    font-size: 16px;
`
const Temp = styled.Text`
    color: white;
    font-size: 16px;
`
const Details = styled.TouchableOpacity`
    margin: auto;
    align-items: center;
    margin-top: 8px;
`
const DetailsText = styled.Text`
    color: ${(props) => props.theme.bgWhite(0.8)};
`