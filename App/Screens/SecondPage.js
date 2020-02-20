import React, { Component } from 'react'
import { ImageBackground, View } from 'react-native'
import { styles } from '../styles/secondScreenStyle'
import Header from '../components/header'
const Background = require('../assets/Images/Background.jpg')
const burger = require('../assets/logos/menu_white.png')

export default class SecondPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { navigation } = this.props;

        return (
            <ImageBackground style={styles.container}
                resizeMode='cover'
                source={Background} >
                < Header {...{ navigation }} />
                <View style={styles.WB}>
                </View>
            </ImageBackground>
        )
    }
}