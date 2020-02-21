import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { styles } from '../../screens/mainScreen/style'
import images from '../../services/constans/images'

export default function Header({ navigation }) {
    return (
        <View style={styles.VB}>
            <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
                <Image style={styles.Img} source={images.burger}></Image>
            </TouchableOpacity>
            <Text style={styles.txt}>Weather Guide</Text>
        </View>
    )
}