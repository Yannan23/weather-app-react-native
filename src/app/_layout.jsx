import { Stack } from 'expo-router'

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name='index' options={{ title: 'Home', headerShown: false }} />
            <Stack.Screen name='Forecast' options={{ title: 'Forecast', headerShown: false }} />
        </Stack>
    )
}

export default RootLayout