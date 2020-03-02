import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './style'
import colors from '../../services/constans/colors'
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Buttons = (foo, title, text) => {
    return (
        <TouchableOpacity style={styles.touch} onPress={foo}>
            <Icon name={title} size={25} color={colors.emerald} />
            <Text style={styles.txt}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Buttons