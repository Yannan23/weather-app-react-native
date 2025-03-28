import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styled from 'styled-components'
import { CalendarDaysIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
// import theme from '../../../../theme'

const SearchBar = () => {
    return (
        <Container>
            <InputText placeholder='Search City' />
            <MagnifyingIconContainer>
                <MagnifyingGlassIcon color='white' size='25px' />
            </MagnifyingIconContainer>
        </Container>
    )
}

const Container = styled.View`
    color: white;
    border: 1px solid white;
    border-radius: 32px;
    padding:12px 16px;
    margin: 8px 8px;
`

const InputText = styled.TextInput`
    color: white;
    font-size: 24px;
`

const MagnifyingIconContainer = styled.TouchableOpacity`
    background-color: ${(props) => props.theme.bgWhite(0.3)}; /* Applying bgWhite function with 0.3 opacity */

`

export default SearchBar