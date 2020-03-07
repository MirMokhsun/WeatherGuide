import React from 'react'
import { ScrollView, } from 'react-native'
import { styles } from './style'
import WeatherBox from '../../components/weatherBox'
import WeatherChart from '../../components/weatherChart'


const MainScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <WeatherBox />
            <WeatherChart navigation={navigation} />
            <WeatherChart navigation={navigation} />
        </ScrollView>
    )
}

export default MainScreen