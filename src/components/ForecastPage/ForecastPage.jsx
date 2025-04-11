import React, { useEffect, useRef } from 'react'
import { ArrowLeftCircleIcon, CalendarDaysIcon } from 'react-native-heroicons/solid'
import { LinearGradient } from 'expo-linear-gradient';
import { Link, useLocalSearchParams } from 'expo-router'
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import ConvertKelvinToCelsius from '../ConvertKelvinToCelsius';

const ForecastPage = () => {
    const { weather } = useLocalSearchParams();
    const forecastData = weather ? JSON.parse(weather) : [];
    const { current, hourly, daily } = forecastData

    const convertDtToLocaleDate = (dt) => {
        const dayName = new Date(dt * 1000).toLocaleDateString('en-US', {
            weekday: 'short'
        })
        return dayName
        console.log(dayName);

    }

    return (
        <LinearGradient
            colors={['#5830da', '#060b19']} // Provide an array of colors
            locations={[0.2, 0.8]}
            style={{ flex: 1 }}
        >
            <LottieContainer>
                <LottieView autoPlay style={{ width: 200, height: 200 }} source={require('../../assets/icons/lottie/snow.json')} />
            </LottieContainer>
            <SafeArea>
                <TouchableContainer>
                    <Link href='/'>
                        <TouchableArea>
                            <ArrowLeftCircleIcon size={30} color='white' />
                            <Back>
                                Back
                            </Back>
                        </TouchableArea>
                    </Link>
                </TouchableContainer>
                <ThisWeekView>
                    <CalendarDaysIcon color='white' size={30} />
                    <ThisWeek>This Week</ThisWeek>
                </ThisWeekView>

                {daily && (
                    daily.slice(0, 7).map((day, index) => {
                        return (
                            <WeekWeather key={index}>
                                <Day>{convertDtToLocaleDate(day.dt)}</Day>
                                <WeatherView>
                                    <LottieView autoPlay style={{ width: 40, height: 40 }} source={require('../../assets/icons/lottie/clear-day.json')} />
                                    <Weather>{day.weather[0].main}</Weather>
                                </WeatherView>
                                <Temp>{ConvertKelvinToCelsius(day.temp.day).toFixed(0)}°</Temp>
                            </WeekWeather>
                        )
                    })
                )}
            </SafeArea>
        </LinearGradient>
    )
}

export default ForecastPage

const LottieContainer = styled.View`
    width: 150px;
    height: 150px;
    position: absolute;
    right: 0;
`
const SafeArea = styled.SafeAreaView`
    margin: 0px 16px;
`
const TouchableContainer = styled.TouchableOpacity`
    margin-top: 16px;
`
const TouchableArea = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
`
const Back = styled.Text`
    color: white;
    font-family: "Saira_Expanded-SemiBold";
    font-size: 20px;
`
const ThisWeekView = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    margin-top: 32px;
`
const ThisWeek = styled.Text`
    color: white;
    font-size: 24px;
    font-family: 'Saira_Expanded-SemiBold';
`
const WeekWeather = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom-color: ${(props) => props.theme.bgWhite(0.1)};
    border-bottom-width:1px
`
const Day = styled.Text`
    color: white;
    text-transform:capitalize;
    font-size: 16px;
`
const WeatherView = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
`
const Weather = styled.Text`
    color: white;
    font-size: 16px;

`
const Temp = styled.Text`
    color: white;
    font-size: 58px;
    font-family: 'Saira_SemiExpanded-Light';
`