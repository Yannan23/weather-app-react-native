import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styled, { useTheme } from 'styled-components/native'
import sun from '../../assets/images/partlycloudy.png'
// import LottieView from 'lottie-react-native';
import { Link } from 'expo-router'
import { ArrowRightCircleIcon } from 'react-native-heroicons/solid'
import GradientText from '../GradientText'
import { CalendarDaysIcon, ChevronDownIcon } from 'react-native-heroicons/solid'
import LottieView from 'lottie-react-native'


const CurrentWeather = () => {
    const theme = useTheme()
    const [isShown, setIsShown] = useState(true)

    return (
        <>
            {/* Current weather */}
            <Container>
                <Location>London,
                    <Country> United Kingdom</Country>
                </Location>
                <WeatherImage source={sun} />
                {isShown && (
                    <>
                        <TempText>21°C</TempText>
                        <WeatherText>thunderstorm</WeatherText>
                        <Date>Friday 16 . 09.41am</Date>
                    </>
                )
                }

            </Container >
            {/* next days button */}
            {isShown && (
                <TouchableOpacity>
                    <Link href='/Forecast'>
                        <ButtonContainer>
                            <GradientView>
                                <GradientText>Next days</GradientText>
                            </GradientView>
                            <ArrowRightCircleIcon size={25} color='white' />
                        </ButtonContainer>
                    </Link>
                </TouchableOpacity>
            )}
            {/* weather details */}
            <WeatherDetails>
                <TodayView>
                    <CalendarDaysIcon size={25} color='white' />
                    <Today>Today</Today>
                </TodayView>
                <ScrollView horizontal contentContainerStyle={{ paddingHorizontal: 15, gap: 8 }} showsHorizontalScrollIndicator={false}>
                    <WeatherView>
                        <Time>Now</Time>
                        <LottieView autoPlay style={{ width: 30, height: 30 }} source={require('../../assets/icons/lottie/clear-day.json')} />
                        <Temp>19°C</Temp>
                    </WeatherView>
                    <WeatherView>
                        <Time>7am</Time>
                        <LottieView autoPlay style={{ width: 30, height: 30 }} source={require('../../assets/icons/lottie/clear-day.json')} />
                        <Temp>19°C</Temp>
                    </WeatherView>
                    <WeatherView>
                        <Time>8am</Time>
                        <LottieView autoPlay style={{ width: 30, height: 30 }} source={require('../../assets/icons/lottie/clear-day.json')} />
                        <Temp>19°C</Temp>
                    </WeatherView>
                    <WeatherView>
                        <Time>9am</Time>
                        <LottieView autoPlay style={{ width: 30, height: 30 }} source={require('../../assets/icons/lottie/clear-day.json')} />
                        <Temp>19°C</Temp>
                    </WeatherView>
                    <WeatherView>
                        <Time>10am</Time>
                        <LottieView autoPlay style={{ width: 30, height: 30 }} source={require('../../assets/icons/lottie/clear-day.json')} />
                        <Temp>19°C</Temp>
                    </WeatherView>
                    <WeatherView>
                        <Time>Now</Time>
                        <LottieView autoPlay style={{ width: 30, height: 30 }} source={require('../../assets/icons/lottie/clear-day.json')} />
                        <Temp>19°C</Temp>
                    </WeatherView>
                    <WeatherView>
                        <Time>Now</Time>
                        <LottieView autoPlay style={{ width: 30, height: 30 }} source={require('../../assets/icons/lottie/clear-day.json')} />
                        <Temp>19°C</Temp>
                    </WeatherView>
                    <WeatherView>
                        <Time>Now</Time>
                        <LottieView autoPlay style={{ width: 30, height: 30 }} source={require('../../assets/icons/lottie/clear-day.json')} />
                        <Temp>19°C</Temp>
                    </WeatherView>
                </ScrollView>
                <Details onPress={() => setIsShown(!isShown)}>
                    {isShown && (
                        <>
                            <DetailsText>More details</DetailsText>
                            <ChevronDownIcon size={20} color={theme.bgWhite(0.8)} />
                        </>
                    )}

                    {!isShown && (
                        <>
                            <DetailsText>More details</DetailsText>
                            <ChevronDownIcon size={20} color={theme.bgWhite(0.8)} />
                        </>
                    )}
                </Details>
            </WeatherDetails>
        </>
    )
}

export default CurrentWeather

const WeatherImage = styled.Image`
    width: 220px;
    height: 220px;
    margin-top: 12px;
`

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
    margin-bottom: 12px;
`

const ButtonContainer = styled.View`
    margin: auto;
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
`
const GradientView = styled.View`
    width: 120px;
    text-align: center;
`

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