import React, { Component } from 'react'
import { View } from 'react-native'
import { styles } from './style'
import colors from '../../services/constans/colors'


export default class SecondPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { navigation } = this.props;

        return (
            <View style={{ backgroundColor: colors.halfBlack, flex: 1, }}>
                <View style={styles.WB}>
                </View>
            </View>

        )
    }
}