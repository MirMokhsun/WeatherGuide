import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './style'
import Switcher from './switcher'
import routs from '../../services/constans/routs'
import texts from '../../services/constans/texts'

export const setLine = (iconName, switchText1, switchText2) => {
    return (
        < View style={styles.switchCont} >
            {/* <Icon /> */}
            < Text style={styles.txt} > {texts.TEMP}</Text>
            <Switcher title1={switchText1} title2={switchText2} />
        </View >
    )
}
const SettingBox = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.switchCont}>
                {/* <Icon /> */}
                <Text style={styles.txt}>{texts.TEMP}</Text>
                <Switcher title1="F" title2="C" />
            </View>
            <View style={styles.switchCont}>
                {/* <Icon /> */}
                <Text style={styles.txt}>Time Format</Text>
                <Switcher title1="24" title2="12" />
            </View>
            <View style={styles.switchCont}>
                {/* <Icon /> */}
                <Text style={styles.txt}>{texts.WIND_VEL}</Text>
                <Switcher title1="km" title2="m" />
            </View>
            <View style={styles.switchCont}>
                {/* <Icon /> */}
                <Text style={styles.txt}>{texts.LOCK}</Text>
                <Switcher />
            </View>
            <View style={styles.switchCont}>
                {/* <Icon /> */}
                <Text style={styles.txt}>{texts.NOTIFI}</Text>
                <Switcher />
            </View>
            <View style={styles.switchCont}>
                {/* <Icon /> */}
                <Text style={styles.txt}>{texts.STATUS_PANEL}</Text>
                <Switcher />
            </View>
            <View style={styles.btnView}>
                <TouchableOpacity onPress={() => navigation.navigate(routs.LoginScreen)} style={styles.touchStl}>
                    <Text style={styles.btnTxt}>{texts.DONE}</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default SettingBox
