import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import routs from '../../../services/constans/routs';
import texts from '../../../services/constans/texts'


export default function ButtonBox({ navigation }) {

    const CheckLogin = () => {
        navigation.navigate(routs.LoginScreen)
    }

    return (
        <TouchableOpacity style={styles.logBut} onPress={CheckLogin}>
            <Text style={styles.txtBut}>{texts.GO_LOG}</Text>
        </TouchableOpacity >
    )
}

