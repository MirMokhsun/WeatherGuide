import React from 'react'
import { TouchableOpacity } from 'react-native'
import { styles } from './style'
import iconsEntypo from '../../services/constans/icons/iconsEntypo'

const HeaderLeft = ({ navigation }) => {
    return (
        <TouchableOpacity style={styles.leftBut} onPress={() => navigation.toggleDrawer()}>
            {iconsEntypo.headerLeft}
        </TouchableOpacity>
    )
}

export default HeaderLeft