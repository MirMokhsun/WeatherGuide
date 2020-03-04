import React from 'react'
import { View, ScrollView, } from 'react-native'
import { styles } from './style'
import WeatherBox from '../../components/weatherBox'
import WeatherChart from '../../components/weatherChart'


const MainScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <WeatherBox />
            <View style={styles.weatherBoxTwo}>
                <WeatherChart />
            </View>
            <View style={styles.weatherBoxTwo}>
                <WeatherChart />
            </View>
        </ScrollView>
    )
}

export default MainScreen