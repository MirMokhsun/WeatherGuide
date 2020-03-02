import React from 'react';
import { View } from 'react-native';
import { styles } from '../style';
import { textInput } from '../textInput'


const InputBox = () => {
    return (
        <View style={styles.InputsView}>
            <View style={styles.VB1}>
                {textInput('Enter your email', null, 'login', null)}
            </View>
            <View style={styles.VB2}>
                {textInput('Enter your password', null, 'textbox-password', null)}
            </View>
        </View>
    )
}

export default InputBox