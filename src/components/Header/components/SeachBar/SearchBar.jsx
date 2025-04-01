import React, { useState } from 'react'
import styled, { css } from 'styled-components/native'
import { MagnifyingGlassIcon, ArrowUpRightIcon } from 'react-native-heroicons/outline'
import Greeting from './components/Greeting'

const SearchBar = () => {
    const [showSearch, toggleShowSearch] = useState(false)
    const [locations, setLocations] = useState('')

    return (
        <>
            <Container variant={showSearch} >
                {
                    showSearch ? (
                        <InputText placeholder='Search City' placeholderTextColor={'lightgray'} />
                    ) : (
                        <Greeting />
                    )
                }
                <MagnifyingIconContainer onPress={() => toggleShowSearch(!showSearch)}>
                    <MagnifyingGlassIcon color='white' size='25px' />
                </MagnifyingIconContainer>
            </Container >
        </>
    )
}

const Container = styled.View`
    color: white;
    border-radius: 32px;
    padding-left: 16px;
    margin: 8px 8px;
    display: flex;
    flex-direction: row;
    align-items: top;
    height: 60px;
    ${(props) => {
        switch (props.variant) {
            case true:
                return css`
                    border: 1px solid white;
                    background-color: ${(props) => props.theme.bgWhite(0.1)};
                    justify-content:flex-end;
                    transition: ease-in-out;
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