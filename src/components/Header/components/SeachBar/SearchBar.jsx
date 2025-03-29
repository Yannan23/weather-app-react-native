import { View, Image, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { MagnifyingGlassIcon, ArrowUpRightIcon } from 'react-native-heroicons/outline'
import { useFonts } from 'expo-font'

const SearchBar = () => {
    const [showSearch, toggleShowSearch] = useState(false)

    const [fontsloaded] = useFonts({
        'Saira_Expanded-SemiBold': require('../../../../assets/fonts/Saira_Expanded-SemiBold.ttf'),
        'Saira_SemiExpanded-Light': require('../../../../assets/fonts/Saira_SemiExpanded-Light.ttf'), // Ensure case matches
    })

    if (!fontsloaded) {
        return undefined
    }

    return (
        <>
            <Container variant={showSearch} >
                {
                    showSearch ? (
                        <InputText placeholder='Search City' placeholderTextColor={'lightgray'} />
                    ) : (
                        <View>
                            <CityContainer>
                                <City>Jakata</City>
                                <ArrowUpRightIcon size={15} color='white' />
                            </CityContainer>
                            <Greeting>Good Morning</Greeting>
                        </View>
                    )

                }
                <MagnifyingIconContainer onPress={() => toggleShowSearch(!showSearch)}>
                    <MagnifyingGlassIcon color='white' size='25px' />
                </MagnifyingIconContainer>
            </Container >
        </>

    )
}

const CityContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const City = styled.Text`
    color: white;
    font-family: 'Saira_SemiExpanded-Light';
    font-size: 20px;
    margin-left:4px;
    margin-right:4px;
`

const Greeting = styled.Text`
    color: white;
    margin-left:4px;
    font-size: 24px;
    font-family: 'Saira_Expanded-SemiBold';
`

const Container = styled.View`
    color: white;
    border-radius: 32px;
    padding-left: 16px;
    margin: 8px 8px;
    display: flex;
    flex-direction: row;
    align-items: top;
    ${(props) => {
        switch (props.variant) {
            case true:
                return css`
                    border: 1px solid white;
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
    margin:4px;
`

export default SearchBar