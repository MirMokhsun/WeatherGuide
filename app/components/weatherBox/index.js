import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './style'
import images from '../../services/constans/images'

// export const wetherMock = {
//     date: 'fr 2/28/2020',
// }

const WeatherBox = ({ navigation, wetherMock }) => {
    return (
        <View style={styles.container}>
            <View style={styles.firstBox}>
                <View style={styles.dateBox}>
                    <Text style={styles.txt}> fr 2/28/2020</Text>
                    <Text style={styles.txt}>4:12</Text>
                </View>
                <View style={styles.tempBox}>
                    <Text style={styles.txt3}>7°c</Text>
                </View>
                <View style={styles.imgBox}>
                    <Image source={images.sun}
                        style={styles.Img} />
                    <Text style={styles.txt}>Sunny</Text>
                </View>
            </View>
            <View style={styles.lastBox}>
                <Text style={styles.txt2}>Max: 10° Min: 5°</Text>
                <Text style={styles.txt2}>Wind: East East-South 29km/h</Text>
            </View>
        </View >
    )
}

export default WeatherBox