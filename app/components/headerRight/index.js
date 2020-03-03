import React from 'react'
import { TouchableOpacity } from 'react-native'
import { styles } from './style'
import iconsEntypo from '../../services/constans/icons/iconsEntypo'
import routs from '../../services/constans/routs'

const HeaderRight = ({ navigation }) => {
    return (
        <TouchableOpacity style={styles.rightBut} onPress={() => navigation.navigate(routs.SecondScreen)}>
            {iconsEntypo.headerRight}
        </TouchableOpacity>
    )
}

export default HeaderRight