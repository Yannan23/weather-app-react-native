import { View, SafeAreaView } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme'
import CurrentWeather from '../components/CurrentWeather';
import { useFonts } from 'expo-font'


const Index = () => {

    const [fontsloaded] = useFonts({
        'Saira_Expanded-SemiBold': require('../assets/fonts/Saira_Expanded-SemiBold.ttf'),
        'Saira_SemiExpanded-Light': require('../assets/fonts/Saira_SemiExpanded-Light.ttf'), // Ensure case matches
        'Saira_Condensed-SemiBold': require('../assets/fonts/Saira_Condensed-SemiBold.ttf'), // Ensure case matches
        'Saira-SemiBold': require('../assets/fonts/Saira-SemiBold.ttf'), // Ensure case matches
        'Saira-Regular': require('../assets/fonts/Saira-Regular.ttf'), // Ensure case matches
        'Saira_Expanded-Thin': require('../assets/fonts/Saira_Expanded-Thin.ttf'), // Ensure case matches
    })

    if (!fontsloaded) {
        return undefined
    }

    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={['#d57f29', '#301f70', '#060b19']} // Provide an array of colors
                locations={[0.2, 0.6, 0.8]}
                style={{ flex: 1 }}
            >
                <SafeAreaView>
                    <ThemeProvider theme={theme}>
                        <CurrentWeather />
                    </ThemeProvider>
                </SafeAreaView>
            </LinearGradient>
        </View>
    );
};

export default Index;

