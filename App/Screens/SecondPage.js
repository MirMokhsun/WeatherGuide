import React, { Component } from 'react'
import { TouchableOpacity, Text, ImageBackground } from 'react-native'
import { styles } from '../styles/SecondScreenStyle'

const Background = require('../assets/Images/Background.jpg')
export default class SecondPage extends Component {
    render() {
        return (
            <ImageBackground style={styles.container}
                resizeMode='cover'
                source={Background} >
                <Text style={styles.txt}>Second Page</Text>
                    <TouchableOpacity style={styles.VB} onPress={() => { this.props.navigation.navigate('Main') }}>
                    </TouchableOpacity>
            </ImageBackground>
        )
    }
}