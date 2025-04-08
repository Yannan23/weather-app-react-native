import { View, Text } from 'react-native'
import React from 'react'
import ForecastPage from '../components/ForecastPage'
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme'

const Forecast = () => {
    return (
        <ThemeProvider theme={theme}>
            <ForecastPage />
        </ThemeProvider>

    )
}

export default Forecast