import { View, Text } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
// import styled from 'styled-components';
// import SearchBar from '../components/Header/components/SeachBar';

const Index = () => {
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={['#d59f29', '#301f70', '#060b19']} // Provide an array of colors
                locations={[0.2, 0.6, 0.8]}
                style={{ flex: 1 }}
            >
                {/* <SearchBar /> */}
            </LinearGradient>
        </View>
    );
};


export default Index;
