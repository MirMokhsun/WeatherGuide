import React from 'react'
import { View, ScrollView, } from 'react-native'
import { styles } from './style'
import colors from '../../services/constans/colors'
import WeatherBox from '../../components/weatherBox'


const MainScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <WeatherBox />
            <View style={styles.weatherBoxTwo}></View>
        </ScrollView>
    )
}

export default MainScreen