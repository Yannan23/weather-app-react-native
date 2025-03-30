import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import SearchBar from '../components/Header/components/SeachBar';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme'
import styled from 'styled-components/native';
import CurrentWeather from '../components/CurrentWeather';
import NextDaysButton from '../components/NextDaysButton/NextDaysButton';
import WeatherDetails from '../components/WeatherDetails';

const Index = () => {
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={['#d57f29', '#301f70', '#060b19']} // Provide an array of colors
                locations={[0.2, 0.6, 0.8]}
                style={{ flex: 1 }}
            >
                <SafeAreaView>
                    <ThemeProvider theme={theme}>
                        <View>
                            <View>
                                <SearchBar />
                            </View>
                            <CurrentWeather />
                            <NextDaysButton />
                            <WeatherDetails />
                        </View>
                    </ThemeProvider>
                </SafeAreaView>
            </LinearGradient>
        </View>
    );
};

export default Index;

