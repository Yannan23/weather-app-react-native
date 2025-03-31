import { View, Text } from 'react-native'
import React from 'react'
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';


const GradientText = ({ children, style }) => {
    return (
        <MaskedView
            maskElement={
                <MaskText>{children}</MaskText>
            }
        >
            <LinearGradient
                colors={['#DF8908', '#B415FF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{ height: 40, width: '100%' }}
            />
        </MaskedView>
    )
}

export default GradientText

const MaskText = styled.Text`
    color: black;
    background-color: transparent;
    height: 40px;
    font-size: 24px;
    font-family: 'Saira-Regular';
`