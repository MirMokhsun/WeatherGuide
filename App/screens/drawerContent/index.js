import React, { Component } from 'react'
import { Text, ImageBackground } from 'react-native'
import { styles } from '../mainScreen/style'
import images from '../../services/constans/images'
import colors from '../../services/constans/colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default class DrawerContent extends Component {
    render() {
        return (
            <ImageBackground style={styles.container}
                resizeMode='cover'
                source={images.background2} >
                <Text style={colors.white}>Settings</Text>
                <TouchableOpacity><Icon name="home" size={25} color={colors.emerald}/></TouchableOpacity>
                <TouchableOpacity><Icon name="location-on" size={25} color={colors.emerald}/></TouchableOpacity>
                <TouchableOpacity><Icon name="temperature-celsius" size={25} color={colors.emerald}/></TouchableOpacity>
                <TouchableOpacity><Icon name="lock" size={25} color={colors.emerald}/></TouchableOpacity>
                <TouchableOpacity><Icon name="notifications" size={25} color={colors.emerald}/></TouchableOpacity>
                <TouchableOpacity><Icon name="picture" size={25} color={colors.emerald}/></TouchableOpacity>
                <TouchableOpacity><Icon name="map" size={25} color={colors.emerald} /></TouchableOpacity>
                <TouchableOpacity><Icon name="widgets" size={25} color={colors.emerald} /></TouchableOpacity>
                <TouchableOpacity><Icon name="contact-mail" size={25} color={colors.emerald} /></TouchableOpacity>
                <TouchableOpacity><Icon name="message" size={25} color={colors.emerald} /></TouchableOpacity>
            </ImageBackground>
        )
    }
}