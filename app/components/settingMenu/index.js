import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './style'
import Switcher from './switcher'


const SettingBox = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Switcher />
        </View >
    )
}

export default SettingBox
