import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styled, { css, useTheme } from 'styled-components/native'
import sun from '../../assets/images/partlycloudy.png'
import { Link } from 'expo-router'
import GradientText from '../GradientText'
import { CalendarDaysIcon, ArrowRightCircleIcon, ChevronDownIcon, ChevronUpIcon, MapPinIcon, MagnifyingGlassIcon } from 'react-native-heroicons/solid'
import LottieView from 'lottie-react-native'
import Greeting from './components/Greeting'

const CurrentWeather = () => {
    const theme = useTheme()
    const [isShown, setIsShown] = useState(true)
    const [showSearch, toggleShowSearch] = useState(false)
    const [locations, setLocations] = useState([1, 2, 3])

    return (
        <>
            <Header>
                <SearchContainer variant={showSearch} >
                    {
                        showSearch ? (
                            <InputText placeholder='Search City' placeholderTextColor={'lightgray'} />
                        ) : (
                            <Greeting />
                        )}
                    <MagnifyingIconContainer onPress={() => toggleShowSearch(!showSearch)}>
                        <MagnifyingGlassIcon color='white' size={25} />
                    </MagnifyingIconContainer>
                </SearchContainer >
                {locations.length > 0 && showSearch ? (
                    <Locations>
                        {locations.map((loc, index) => {
                            return (
                                <LocationList key={index}>
                                    <MapPinIcon color='black' size={25} />
                                    <Text>London, United Kingdom</Text>
                                </LocationList>
                            )
                        })}
                    </Locations>
                ) : null}
            </Header>

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
                {/* details rows */}
                <DetailRow>
                    <View>
                        <WeatherCondition>Air Auality</WeatherCondition>
                        <WeatherConditionText>60 Moderate</WeatherConditionText>
                    </View>
                    <View>
                        <WeatherCondition>Humidity</WeatherCondition>
                        <WeatherConditionText>87%</WeatherConditionText>
                    </View>
                </DetailRow>
                <DetailRow>
                    <View>
                        <WeatherCondition>Pricipitation</WeatherCondition>
                        <WeatherConditionText>87%</WeatherConditionText>
                    </View>
                    <View>
                        <WeatherCondition>Light Rain</WeatherCondition>
                        <WeatherConditionText>34%</WeatherConditionText>
                    </View>
                </DetailRow>
                {/* today weather view */}
                {!isShown && (
                    <>
                        <TodayView>
                            <CalendarDaysIcon size={25} color='white' />
                            <Today>Today</Today>
                        </TodayView>
                        <ScrollView horizontal contentContainerStyle={{ paddingHorizontal: 20, gap: 8 }} showsHorizontalScrollIndicator={false}>
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
                    </>
                )}
                {isShown && (
                    <Details onPress={() => setIsShown(!isShown)}>
                        <>
                            <DetailsText>More details</DetailsText>
                            <ChevronUpIcon size={20} color={theme.bgWhite(0.8)} />
                        </>
                    </Details>
                )}


                {!isShown && (
                    <Details onPress={() => setIsShown(!isShown)}>
                        <>
                            <DetailsText>Back</DetailsText>
                            <ChevronDownIcon size={20} color={theme.bgWhite(0.8)} />
                        </>
                    </Details>
                )}
            </WeatherDetails>
        </>
    )
}

export default CurrentWeather

const Header = styled.View`
        position: relative;
        margin:0 8px;
        z-index: 50;
`
const SearchContainer = styled.View`
    color: white;
    border-radius: 32px;
    padding-left: 16px;
    margin: 8px 0px;
    display: flex;
    flex-direction: row;
    align-items: top;
    height: 56px;
    ${(props) => {
        switch (props.variant) {
            case true:
                return css`
                    border: 1px solid white;
                    background-color: ${(props) => props.theme.bgWhite(0.1)};
                    justify-content:flex-end;
                `;
            case false:
                return css`
                    justify-content:space-between;
                `
        }
    }}
`
const InputText = styled.TextInput`
    color: white;
    font-size: 24px;
    flex-grow: 1;
`
const MagnifyingIconContainer = styled.TouchableOpacity`
    background-color: ${(props) => props.theme.bgWhite(0.2)};
    width: 50px;
    height: 50px;
    border-radius: 50%;
    padding: 12px;
    margin:2px;
`
const Locations = styled.View`
    position: absolute;
    top:72px;
    background-color:#f0f0f0;
    width: 100%;
    border-radius: 24px;
`
const LocationList = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    gap:10px;
    padding: 12px;
    align-items: center; 
    
   
`
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
const DetailRow = styled.View`
    margin: 0px 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom-color: ${(props) => props.theme.bgWhite(0.1)};
    border-bottom-width:1px;
    padding: 12px 0;
`
const WeatherCondition = styled.Text`
    color: ${(props) => props.theme.bgWhite(0.6)};
    font-family: 'Saira_Expanded-Thin';
    font-size: 16px;
`
const WeatherConditionText = styled.Text`
    color: white;
    font-size: 20px;
    font-family: 'Saira-Regular';
`