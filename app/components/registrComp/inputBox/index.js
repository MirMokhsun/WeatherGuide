import React from 'react';
import { View, } from 'react-native';
import { styles } from '../style';
import textInput from '../textInput'


const InputBox = () => {
    return (
        <View style={styles.InputsView}>
            {textInput('Enter your email', null, 'login', null)}
            {textInput('Enter your password', null, 'textbox-password', null)}
            {textInput('Comfrim your password', null, 'textbox-password', null)}
        </View>
    )
}

export default InputBox