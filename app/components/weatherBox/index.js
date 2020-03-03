import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './style'
import images from '../../services/constans/images'
import weatherMock from './weatherMock'


const WeatherBox = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.firstBox}>
                <View style={styles.dateBox}>
                    <Text style={styles.txt}>{weatherMock.date}</Text>
                    <Text style={styles.txt}>{weatherMock.time}</Text>
                </View>
                <View style={styles.tempBox}>
                    <Text style={styles.txt3}>{weatherMock.temp}</Text>
                </View>
                <View style={styles.imgBox}>
                    <Image source={images.sun}
                        style={styles.Img} />
                    <Text style={styles.txt}>{weatherMock.weather}</Text>
                </View>
            </View>
            <View style={styles.lastBox}>
                <Text style={styles.txt2}>{weatherMock.maxT} {weatherMock.minT}</Text>
                <Text style={styles.txt2}>{weatherMock.wind}</Text>
            </View>
        </View >
    )
}

export default WeatherBox