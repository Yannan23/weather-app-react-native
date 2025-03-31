import React from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

const GradientText = ({ children, style }) => {
    return (
        <MaskedView
            maskElement={
                <Text
                    style={[
                        style,
                        {
                            // fontWeight: 'bold',
                            fontSize: 24,
                            color: 'black', // This helps with masking
                            backgroundColor: 'transparent',
                            lineHeight: 60,
                            fontFamily: 'Saira-Regular'
                        },
                    ]}
                >
                    {children}
                </Text>
            }
        >
            <LinearGradient
                colors={['#B415FF', '#DF8908']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ width: '100%', height: 60 }} // Ensure gradient covers the text area
            />
        </MaskedView>
    );
};

export default GradientText;
