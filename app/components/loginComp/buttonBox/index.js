import React from 'react';
import { View, } from 'react-native';
import { styles } from '../style';
import { Buttons } from '../buttons'
import routs from '../../../services/constans/routs';
import texts from '../../../services/constans/texts';


const ButtonBox = ({ navigation }) => {
    const goTo = () => {
        navigation.navigate(routs.RegistrScreen)
    }

    const goToTwo = () => {
        navigation.navigate(routs.App)
    }

    return (
        <View style={styles.btnBox}>
            <View style={styles.regBut}>
                {Buttons(texts.GO_REG, goTo)}
            </View>
            <View style={styles.appBut}>
                {Buttons(texts.GO_APP, goToTwo)}
            </View>
        </View>
    )
}

export default ButtonBox