import React from 'react';
import { View, } from 'react-native';
import { styles } from '../style';
import { Buttons } from '../buttons'




const ButtonBox = ({ navigation }) => {
    const goTo = () => {
        console.log('navigation', navigation)
        navigation.navigate('RegistrScreen')
    }

    const goToTwo = () => {
        console.log('navigation', navigation)
        navigation.navigate('App')
    }

    return (
        <View style={styles.btnBox}>
            <View style={styles.regBut}>
                {Buttons('Go To Registration', goTo)}
            </View>
            <View style={styles.appBut}>
                {Buttons('Go To Appflow', goToTwo)}
            </View>
        </View>
    )
}

export default ButtonBox