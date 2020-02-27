import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { styles } from './style'
import images from '../../services/constans/images'

const Header =({ navigation }) =>{
    console.log('navigation', navigation)
    return (
        <View style={styles.VB}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Image style={styles.Img} source={images.burger}></Image>
            </TouchableOpacity>
        </View>
    )
}

export default Header