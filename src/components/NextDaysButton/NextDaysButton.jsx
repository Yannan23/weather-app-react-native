import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import styled from 'styled-components/native'
import { ArrowRightCircleIcon } from 'react-native-heroicons/solid'
import GradientText from './components/GradientText'

const NextDaysButton = () => {
    return (
        <TouchableOpacity>
            <Link href='/Forecast'>
                <Container>
                    <GradientView>
                        <GradientText>Next days</GradientText>
                    </GradientView>
                    <ArrowRightCircleIcon size={25} color='white' />
                </Container>
            </Link>
        </TouchableOpacity>
    )
}

export default NextDaysButton

const Container = styled.View`
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
