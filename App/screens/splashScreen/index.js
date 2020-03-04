import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { styles } from './style'
import Loader from '../../components/loader'
import routs from '../../services/constans/routs'
import texts from '../../services/constans/texts'


export default class SplashScreen extends Component {

    componentDidMount() {
        const { navigation } = this.props;
        setTimeout(() => {
            navigation.navigate(routs.SettingScreen);
        }, 2000)
    }

    render() {
        return (
            <View style={styles.container}>
                <Loader />
                <Text style={styles.txt}> {texts.WEATHER_GUIDE}</Text>
            </View>
        )
    }
}

