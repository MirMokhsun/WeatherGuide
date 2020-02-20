import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { styles } from '../styles/mainScreenStyles'

const burger = require('../assets/logos/menu.png')
export default function Header({ navigation }) {
    return (
        <View style={styles.VB}>
            <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
                <Image style={styles.Img} source={burger}></Image>
            </TouchableOpacity>
            <Text style={styles.txt}>Weather Guide</Text>
        </View>
    )
}