import React from 'react'
import styled from 'styled-components/native';

const Greeting = () => {
    const now = new Date();
    const hours = now.getHours();
    let greeting;

    if (hours >= 6 && hours < 12) {
        greeting = 'Good Morning'
    } else if (hours >= 12 && hours < 18) {
        greeting = 'Good Afternoon'
    } else {
        greeting = 'Good Evening'
    }

    return (
        <GreetingView>
            <GreetingText>{greeting}</GreetingText>
        </GreetingView>
    )
}

export default Greeting

const GreetingView = styled.View`
    /* display: flex; */
    justify-content: flex-end;
`
const GreetingText = styled.Text`
    color: ${(props) => props.theme.bgWhite(0.5)};
    font-size: 24px;
    margin: 8px 0px;
    font-family: 'Saira-SemiBold';
`