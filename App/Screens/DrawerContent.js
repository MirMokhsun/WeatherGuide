import React, { Component } from 'react'
import { Text, ImageBackground } from 'react-native'
import { styles } from '../styles/MainScreenStyles'

const Background2 = require('../assets/Images/Background2.jpg')
export default class DrawerContent extends Component {

    render() {
        return (
            <ImageBackground style={styles.container}
                resizeMode='cover'
                source={Background2} >
                <Text style={{color: 'white'}}>Shalalalalal</Text>
            </ImageBackground>
        )
    }
}