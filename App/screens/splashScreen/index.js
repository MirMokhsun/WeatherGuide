import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { styles } from './style'
import Loader from '../../components/loader'
import images from '../../services/constans/images'
// import { strings } from '../../i18n/i18n';


export default class SplashScreen extends Component {
    componentDidMount() {
        const { navigation } = this.props;
        setTimeout(() => {
            navigation.navigate('Auth');
        }, 2000)
    }
    render() {
        // const {screenProps: {localText}} = this.props;
        // console.log('localText'){localText('splash.title')}
        return (
            <View style={styles.container}>
                <Loader
                    source={images.logo} />
                <Text style={styles.txt}> Weather Guide</Text>
            </View>
        )
    }
}

