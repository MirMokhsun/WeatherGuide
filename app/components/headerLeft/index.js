import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { styles } from './style'
import Icon from 'react-native-vector-icons/Entypo'
import colors from '../../services/constans/colors'

const HeaderLeft = ({ navigation }) => {
    return (
        <View style={styles.VB}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Icon style={{ marginHorizontal: 5 }} size={40} color={colors.emerald} name="menu" />
            </TouchableOpacity>
        </View>
    )
}

export default HeaderLeft