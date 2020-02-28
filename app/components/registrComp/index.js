import React from 'react';
import { View, TextInput, } from 'react-native';
import colors from '../../services/constans/colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './style';

const textInput = (placeHolder, setUser, iconName, value) => {
    return (
        <View style={styles.VB1}>
            <View style={styles.txtInView}>
                <TextInput
                    placeholder={placeHolder}
                    style={styles.txtIn}
                    onChangeText={text => setUser(text)}
                    value={value} />
                <View style={styles.txtIcon}>
                    <Icon name={iconName} size={25} color={colors.emerald} />
                </View>
            </View>
        </View>
    )
}


export default textInput