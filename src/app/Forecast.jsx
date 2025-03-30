import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftCircleIcon } from 'react-native-heroicons/solid'
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router'




const Forecast = () => {
    return (
        <LinearGradient
            colors={['#4e29d5', '#611f70', '#060b19']} // Provide an array of colors
            locations={[0.2, 0.5, 1]}
            style={{ flex: 1 }}
        >
            <SafeAreaView>
                <TouchableOpacity>
                    <ArrowLeftCircleIcon size={25} color='white' />
                    <Link href='/'>NextDays</Link>
                </TouchableOpacity>
            </SafeAreaView>
        </LinearGradient>
    )
}

export default Forecast