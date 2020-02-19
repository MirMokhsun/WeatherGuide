import React, { Component } from 'react'
import { Dimensions, Animated} from 'react-native'

const screenWidth = Math.round(Dimensions.get('window').width);
export default class Loader extends Component {
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