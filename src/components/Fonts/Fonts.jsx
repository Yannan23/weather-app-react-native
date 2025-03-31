import { View, Text } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'


const Fonts = () => {

    const [fontsloaded] = useFonts({
        'Saira_Expanded-SemiBold': require('../../../../assets/fonts/Saira_Expanded-SemiBold.ttf'),
        'Saira_SemiExpanded-Light': require('../../../../assets/fonts/Saira_SemiExpanded-Light.ttf'), // Ensure case matches
        'Saira_Condensed-SemiBold': require('../../../../assets/fonts/Saira_Condensed-SemiBold.ttf'), // Ensure case matches
        'Saira-SemiBold': require('../../../../assets/fonts/Saira-SemiBold.ttf'), // Ensure case matches
        'Saira-Regular': require('../../../../assets/fonts/Saira-Regular.ttf'), // Ensure case matches
        'Saira_Expanded-Thin': require('../../../../assets/fonts/Saira_Expanded-Thin.ttf'), // Ensure case matches

    })

    if (!fontsloaded) {
        return undefined
    }

    return (
        <View>
            <Text>Fonts</Text>
        </View>
    )
}

export default Fonts