import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { styles } from './style'
import Loader from '../../components/loader'
import images from '../../services/constans/images'

export default class SplashScreen extends Component {
    componentDidMount() {
        const { navigation } = this.props;
        setTimeout(() => {
            navigation.navigate('Auth');
        }, 2000)
    }
    render() {
        return (
            <View style={styles.container}>
                <Loader
                    source={images.logo} />
                <Text style={styles.txt}>Weather Guide</Text>
            </View>
        )
    }
}

