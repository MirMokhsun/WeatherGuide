import React, { Component } from 'react'
import { ImageBackground, View } from 'react-native'
import { styles } from './style'
import Header from '../../components/header'
import images from '../../services/constans/images'


export default class SecondPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { navigation } = this.props;

        return (
            <ImageBackground style={styles.container}
                resizeMode='cover'
                source={images.background} >
                < Header {...{ navigation }} />
                <View style={styles.WB}>
                </View>
            </ImageBackground>
        )
    }
}