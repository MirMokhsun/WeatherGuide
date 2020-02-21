import React, { Component } from 'react'
import { Text, ImageBackground } from 'react-native'
import { styles } from '../mainScreen/style'
import images from '../../services/constans/images'
import colors from '../../services/constans/colors'


export default class DrawerContent extends Component {
    render() {
        return (
            <ImageBackground style={styles.container}
                resizeMode='cover'
                source={images.background2} >
                <Text style={colors.white}>Shalalalalal</Text>
            </ImageBackground>
        )
    }
}