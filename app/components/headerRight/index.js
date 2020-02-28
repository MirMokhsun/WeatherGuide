import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import {styles} from './style'
import Icon  from 'react-native-vector-icons/Entypo'
import colors from '../../services/constans/colors'

const HeaderRight = ({ navigation }) => {
    return (
        <View style={styles.qwe}>
            <TouchableOpacity onPress={() => navigation.navigate('SecondScreen')}>
                <Icon style={{marginHorizontal: 5}}size={40} color={colors.emerald} name="location-pin" />
            </TouchableOpacity>
        </View>
    )
}

export default HeaderRight