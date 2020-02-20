import React, { Component } from 'react'
import {  ImageBackground, View, ScrollView } from 'react-native'
import { styles } from '../styles/mainScreenStyles'
import Header from '../components/header'

const Wallpaper = require('../assets/Images/Wallpaper.jpg')
export default class MainScreen extends Component {
    render() {
        return (
            <ImageBackground style={styles.container}
                resizeMode='cover'
                source={Wallpaper} >
                < Header/>
                <ScrollView style={styles.container}>
                    <View style={styles.WB}></View>
                    <View style={styles.WBH}></View>
                    <View style={styles.WBD}></View>
                    <View style={styles.WBD}></View>
                </ScrollView>
            </ImageBackground>
        )
    }
}