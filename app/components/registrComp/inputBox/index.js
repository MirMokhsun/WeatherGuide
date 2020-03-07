import React from 'react';
import { View, } from 'react-native';
import { styles } from './style';
import texts from '../../../services/constans/texts';
import { TextInputlog } from '../../loginComp/textInput';


export default function InputBox() {
    return (
        <View style={styles.InputsView}>
            <View style={styles.inputView}>
                {TextInputlog(texts.TEXT_IN1, null, 'login', null)}
            </View>
            <View style={styles.inputView2}>
                {TextInputlog(texts.TEXT_IN2, null, 'textbox-password', null)}
            </View>
            <View style={styles.inputView2}>
                {TextInputlog(texts.TEXT_IN2, null, 'textbox-password', null)}
            </View>
        </View>
    )
}

