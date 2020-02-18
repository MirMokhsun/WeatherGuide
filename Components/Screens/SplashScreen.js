import React, { Component } from 'react'
import { Image, View, StyleSheet, Dimensions, Animated, Text } from 'react-native'


const screenWidth = Math.round(Dimensions.get('window').width);
class Loader extends Component {
    state = {
        opacity: new Animated.Value(0),
    }

    onLoad = () => {
        Animated.timing(this.state.opacity, { toValue: 1, duration: 1000, }).start()
    }

    render() {
        return (
            <Animated.Image
                onLoad={this.onLoad}
                {...this.props}
                style={[
                    {
                        width: screenWidth,
                        height: screenWidth,
                        opacity: this.state.opacity,
                        transform: [
                            {
                                scale: this.state.opacity.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0.25, 0.75]
                                })
                            }
                        ]
                    }
                ]}
            />
        )
    }
}

export default class SplashScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Loader
                    source={require('../../src/logos/sun.png')} />
                <Text style={styles.txt}>Weather Guide</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d3f4ff',
    },
    txt: {
        fontSize: 45,
        fontFamily: 'OdibeeSans-Regular'
    }
})