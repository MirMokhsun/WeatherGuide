import React from 'react'
import { TouchableOpacity } from 'react-native'
import { styles } from './style'
import iconsEntypo from '../../services/constans/icons/iconsEntypo'

const HeaderRight = ({ navigation, }) => {
    return (
        <TouchableOpacity style={styles.rightBut} onPress={() => navigation.navigate('SecondScreen')}>
            {iconsEntypo.headerRight}
        </TouchableOpacity>
    )
}

export default HeaderRight