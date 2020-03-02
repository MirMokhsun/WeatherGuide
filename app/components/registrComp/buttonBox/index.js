import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../style';

export default function ButtonBox({ navigation }) {

    const CheckLogin = () => {
        navigation.navigate('LoginScreen')
    }

    return (
        <View style={{ flex: 1, }}>
            <TouchableOpacity style={styles.logBut} onPress={CheckLogin}>
                <Text style={styles.txtBut}>Go To Login Page</Text>
            </TouchableOpacity >
        </View>
    )
}

