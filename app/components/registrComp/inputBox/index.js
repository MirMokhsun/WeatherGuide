import React from 'react';
import { View, } from 'react-native';
import { styles } from '../style';
import TextInputReg from '../textInput'
import texts from '../../../services/constans/texts';


export default function InputBox() {
    return (
        <View style={styles.InputsView}>
            {TextInputReg(texts.TEXT_IN1, null, 'login', null)}
            {TextInputReg(texts.TEXT_IN2, null, 'textbox-password', null)}
            {TextInputReg(texts.TEXT_IN3, null, 'textbox-password', null)}
        </View>
    )
}

