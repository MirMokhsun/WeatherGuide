import React from 'react'
import { View, ScrollView, Text, Image } from 'react-native'
import { styles } from './style'
import colors from '../../services/constans/colors'
import WeatherBox from '../../components/weatherBox'


const MainScreen = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: colors.halfBlack, flex: 1, }}>
            <ScrollView style={styles.container}>
                <WeatherBox />
                <View style={styles.WBH}></View>
            </ScrollView>
        </View>
    )
}

export default MainScreen