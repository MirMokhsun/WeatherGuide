import React from 'react';
import { View, TextInput, } from 'react-native';
import colors from '../../../services/constans/colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './style';


export const TextInputlog = (placeHolder, setUser, iconName, value) => {
    return (
        <View style={styles.txtInView}>
            <TextInput
                placeholder={placeHolder}
                style={styles.txtIn}
                onChangeText={pass => setUser(pass)}
                value={value} />
            <View style={styles.icon}>
                <Icon name={iconName} size={25} color={colors.emerald} />
            </View>
        </View>
    )
}