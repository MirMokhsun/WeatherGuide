import React, { Component } from 'react'
import { Text, ImageBackground, View, Image } from 'react-native'
import { styles } from '../styles/MainScreenStyles'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class MainScreen extends Component {

    render() {
        return (
            <ImageBackground style={styles.container}
                resizeMode='cover'
                source={require('../assets/Images/Wallpaper.jpg')} >
                <View style={styles.VB}>
                    <TouchableOpacity onPress={() => { this.props.navigation.openDrawer() }}>
                        <Image style={styles.Img} source={require('../assets/logos/menu.png')}></Image>
                    </TouchableOpacity>
                    <Text style={styles.txt}>Weather Guide</Text>
                </View>
            </ImageBackground>
        )
    }
}