import React, { Component } from 'react'
import {  View, ScrollView } from 'react-native'
import { styles } from './style'
import colors from '../../services/constans/colors'


export default class MainScreen extends Component {
    render() {
        return (
            <View style={{backgroundColor: colors.halfBlack, flex : 1,}}>
                <ScrollView style={styles.container}>
                    <View style={styles.WB}></View>
                    <View style={styles.WBH}></View>
                    <View style={styles.WBD}></View>
                    <View style={styles.WBD}></View>
                </ScrollView>
            </View>
        )
    }
}