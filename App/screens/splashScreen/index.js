import React, { Component } from 'react'
import { View,Text } from 'react-native'
import {styles} from './style'
import Loader from '../../components/loader'
import images from '../../services/constans/images'

export const SplashScreen = (props) => {
    console.log('navigation', props)
    return (
        <View style={styles.container}>
            <Loader
                source={images.logo} />
            <Text style={styles.txt}>Weather Guide</Text>
        </View>
    )
} 
export default SplashScreen
