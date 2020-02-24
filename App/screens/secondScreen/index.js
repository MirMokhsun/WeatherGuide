import React, { Component } from 'react'
import { ImageBackground, View } from 'react-native'
import { styles } from './style'
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
                <View style={styles.WB}>
                </View>
            </ImageBackground>
        )
    }
}