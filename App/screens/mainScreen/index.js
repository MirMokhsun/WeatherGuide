import React, { Component } from 'react'
import { ImageBackground, View, ScrollView } from 'react-native'
import { styles } from './style'
import Header from '../../components/header'
import images from '../../services/constans/images';


export default class MainScreen extends Component {
    render() {
        return (
            <ImageBackground style={styles.container}
                resizeMode='cover'
                source={images.wallpaper} >

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