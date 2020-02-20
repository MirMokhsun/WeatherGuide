import React, { Component } from 'react'
import { View,Text } from 'react-native'
import {styles} from '../styles/splashScreenStyles'
import Loader from '../components/loader'

const logo= require('../assets/logos/sun.png')
export default class SplashScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Loader
                    source={logo} />
                <Text style={styles.txt}>Weather Guide</Text>
            </View>
        )
    }
}

