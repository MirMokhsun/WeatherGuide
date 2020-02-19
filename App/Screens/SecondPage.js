import React, { Component } from 'react'
import { TouchableOpacity, Text, ImageBackground } from 'react-native'
import { styles } from '../styles/MainScreenStyles'

export default class SecondPage extends Component {
    render() {
        return (
            <ImageBackground style={styles.container}
                resizeMode='cover'
                source={require('../assets/Images/Wallpaper.jpg')} >
                <Text style={styles.txt}>Second Page</Text>
                    <TouchableOpacity style={styles.WB} onPress={() => { this.props.navigation.navigate('Main') }}>
                    </TouchableOpacity>
            </ImageBackground>
        )
    }
}