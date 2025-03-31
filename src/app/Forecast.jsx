import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftCircleIcon, CalendarDaysIcon } from 'react-native-heroicons/solid'
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router'
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

const Forecast = () => {
    const animation = useRef < LottieView > (null);

    useEffect(() => {
        animation.current?.play();
    }, [])

    return (
        <LinearGradient
            colors={['#5830da', '#060b19']} // Provide an array of colors
            locations={[0.2, 0.8]}
            style={{ flex: 1 }}
        >
            <LottieContainer>
                <LottieView autoPlay style={{ width: 200, height: 200 }} source={require('../assets/icons/lottie/snow.json')} />
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
                <WeekWeather>
                    <Day>sun</Day>
                    <WeatherView>
                        <LottieView autoPlay style={{ width: 40, height: 40 }} source={require('../assets/icons/lottie/clear-day.json')} />
                        <Weather>rainy</Weather>
                    </WeatherView>
                    <Temp>17°</Temp>
                </WeekWeather>
                <WeekWeather>
                    <Day>sun</Day>
                    <WeatherView>
                        <LottieView autoPlay style={{ width: 40, height: 40 }} source={require('../assets/icons/lottie/clear-day.json')} />
                        <Weather>rainy</Weather>
                    </WeatherView>
                    <Temp>17°</Temp>
                </WeekWeather>
                <WeekWeather>
                    <Day>sun</Day>
                    <WeatherView>
                        <LottieView autoPlay style={{ width: 40, height: 40 }} source={require('../assets/icons/lottie/clear-day.json')} />
                        <Weather>rainy</Weather>
                    </WeatherView>
                    <Temp>17°</Temp>
                </WeekWeather>
                <WeekWeather>
                    <Day>sun</Day>
                    <WeatherView>
                        <LottieView autoPlay style={{ width: 40, height: 40 }} source={require('../assets/icons/lottie/clear-day.json')} />
                        <Weather>rainy</Weather>
                    </WeatherView>
                    <Temp>17°</Temp>
                </WeekWeather>
                <WeekWeather>
                    <Day>sun</Day>
                    <WeatherView>
                        <LottieView autoPlay style={{ width: 40, height: 40 }} source={require('../assets/icons/lottie/clear-day.json')} />
                        <Weather>rainy</Weather>
                    </WeatherView>
                    <Temp>17°</Temp>
                </WeekWeather>
                <WeekWeather>
                    <Day>sun</Day>
                    <WeatherView>
                        <LottieView autoPlay style={{ width: 40, height: 40 }} source={require('../assets/icons/lottie/clear-day.json')} />
                        <Weather>rainy</Weather>
                    </WeatherView>
                    <Temp>17°</Temp>
                </WeekWeather>
                <WeekWeather>
                    <Day>sun</Day>
                    <WeatherView>
                        <LottieView autoPlay style={{ width: 40, height: 40 }} source={require('../assets/icons/lottie/clear-day.json')} />
                        <Weather>rainy</Weather>
                    </WeatherView>
                    <Temp>17°</Temp>
                </WeekWeather>
            </SafeArea>
        </LinearGradient>
    )
}

export default Forecast

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
    border-bottom-color: #d3d3d351;
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