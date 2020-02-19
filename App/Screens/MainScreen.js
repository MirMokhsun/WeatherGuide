import React, { Component } from 'react'
import { Text, ImageBackground, View, Image } from 'react-native'
import { styles } from '../styles/MainScreenStyles'
import { TouchableOpacity } from 'react-native-gesture-handler'

const burger =require('../assets/logos/menu.png')
const Wallpaper = require('../assets/Images/Wallpaper.jpg')
export default class MainScreen extends Component {
    render() {
        return (
            <ImageBackground style={styles.container}
                resizeMode='cover'
                source={Wallpaper} >
                <View style={styles.VB}>
                    <TouchableOpacity onPress={() => { this.props.navigation.openDrawer() }}>
                        <Image style={styles.Img} source={burger}></Image>
                    </TouchableOpacity>
                    <Text style={styles.txt}>Weather Guide</Text>
                </View>
            </ImageBackground>
        )
    }
}