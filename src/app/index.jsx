import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import SearchBar from '../components/Header/components/SeachBar';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme'
import CurrentWeather from '../components/CurrentWeather';

const Index = () => {
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={['#d59f29', '#301f70', '#060b19']} // Provide an array of colors
                locations={[0.2, 0.6, 0.8]}
                style={{ flex: 1 }}
            >
                <SafeAreaView>
                    <ThemeProvider theme={theme}>
                        <SearchBar />
                    </ThemeProvider>
                    <CurrentWeather />
                </SafeAreaView>
            </LinearGradient>
        </View>
    );
};


export default Index;
