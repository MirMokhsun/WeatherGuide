import React from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import { styles } from '../style';

export const Buttons = (title, onPress, ) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.txtBut}>{title}</Text>
        </TouchableOpacity>
    )
}