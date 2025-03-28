import { Stack } from 'expo-router'

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name='index' options={{ title: 'Home', headerShown: false }} />
        </Stack>
    )
}

export default RootLayout