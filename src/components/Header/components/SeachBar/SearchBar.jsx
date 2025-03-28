import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styled from 'styled-components'
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'

const SearchBar = () => {
    const [city, setCity] = useState('')
    const [showSearch, toggleShowSearch] = useState(true)

    return (
        <>

            <Container>
                {
                    showSearch ? (<InputText placeholder='Search City' placeholderTextColor={'lightgray'} />) : null
                }

                <MagnifyingIconContainer onPress={() => toggleShowSearch(!showSearch)} >
                    <MagnifyingGlassIcon color='white' size='25px' />
                </MagnifyingIconContainer>
            </Container >
        </>

    )
}

const Container = styled.View`
    color: white;
    border: 1px solid white;
    border-radius: 32px;
    padding-left: 16px;
    margin: 8px 8px;
    display: flex;
    flex-direction: row;
    justify-content:flex-end;
    align-items: center;
`

const InputText = styled.TextInput`
    color: white;
    font-size: 24px;
    flex-grow: 1;
`

const MagnifyingIconContainer = styled.TouchableOpacity`
    background-color: ${(props) => props.theme.bgWhite(0.3)}; /* Applying bgWhite function with 0.3 opacity */
    width: 50px;
    height: 50px;
    border-radius: 50%;
    padding: 12px;
    margin:4px;
`

export default SearchBar