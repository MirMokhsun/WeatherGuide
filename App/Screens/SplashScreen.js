import React, { Component } from 'react'
import { View,Text } from 'react-native'
import {styles} from '../styles/SplashScreenStyles'
import Loader from '../Components/Loader'

export default class SplashScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Loader
                    source={require('../assets/logos/sun.png')} />
                <Text style={styles.txt}>Weather Guide</Text>
            </View>
        )
    }
}

