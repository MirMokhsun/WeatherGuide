import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { styles } from '../../screens/mainScreen/style'
import images from '../../services/constans/images'

const Header =({ navigation }) =>{
    console.log('navigation', navigation)
    return (
        <View style={styles.VB}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image style={styles.Img} source={images.burger}></Image>
            </TouchableOpacity>
            {/* <Text style={styles.txt}>Weather Guide</Text> */}
        </View>
    )
}

export default Header