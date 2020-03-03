import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './style'
import Switcher from './switcher'
import routs from '../../services/constans/routs'


const SettingBox = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 1, height: "13.5%", width: "100%", borderColor: 'white', alignItems: 'center', }}>
                {/* <Icon /> */}
                <Text style={styles.txt}>Temperature</Text>
                <Switcher title1="F" title2="C" />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 1, height: "13.5%", width: "100%", borderColor: 'white', alignItems: 'center', }}>
                {/* <Icon /> */}
                <Text style={styles.txt}>Time Format</Text>
                <Switcher title1="24" title2="12" />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 1, height: "13.5%", width: "100%", borderColor: 'white', alignItems: 'center', }}>
                {/* <Icon /> */}
                <Text style={styles.txt}>Wind velocity</Text>
                <Switcher title1="km" title2="m" />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 1, height: "13.5%", width: "100%", borderColor: 'white', alignItems: 'center', }}>
                {/* <Icon /> */}
                <Text style={styles.txt}>Lock screen</Text>
                <Switcher />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 1, height: "13.5%", width: "100%", borderColor: 'white', alignItems: 'center', }}>
                {/* <Icon /> */}
                <Text style={styles.txt}>Notifications</Text>
                <Switcher />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomWidth: 1, height: "13.5%", width: "100%", borderColor: 'white', alignItems: 'center', }}>
                {/* <Icon /> */}
                <Text style={styles.txt}>Status Panel</Text>
                <Switcher />
            </View>
            <View style={{ alignItems: 'center', paddingTop: "5%" }}>
                <TouchableOpacity onPress={() => navigation.navigate(routs.LoginScreen)} style={{ backgroundColor: 'black', width: "20%", height: "30%", alignItems: 'center', borderRadius: 25 }}>
                    <Text style={styles.txt}>Done</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default SettingBox
