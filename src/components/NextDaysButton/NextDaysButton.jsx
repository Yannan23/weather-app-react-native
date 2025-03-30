import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import styled from 'styled-components/native'
import { ArrowRightCircleIcon } from 'react-native-heroicons/solid'

const NextDaysButton = () => {
    return (
        <TouchableOpacity>
            <Container>
                <ButtonText>
                    <Link href='/Forecast'>NextDays</Link>
                </ButtonText>
                <ArrowRightCircleIcon size={25} color='white' />
            </Container>
        </TouchableOpacity>
    )
}

export default NextDaysButton

const Container = styled.View`
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    margin-top: 16px;
`
const ButtonText = styled.Text`
    color: white;
`