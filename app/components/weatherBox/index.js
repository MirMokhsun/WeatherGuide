// import React from 'react'
// import { View, Text, Image } from 'react-native'
// import { styles } from './style'
// import images from '../../services/constans/images'
// import weatherMock from './weatherMock'


// const WeatherBox = ({ navigation }) => {
//     return (
//         <View style={styles.container}>
//             <View style={styles.firstBox}>
//                 <View style={styles.dateBox}>
//                     <Text style={styles.txt}>{weatherMock.date}</Text>
//                     <Text style={styles.txt}>{weatherMock.time}</Text>
//                 </View>
//                 <View style={styles.tempBox}>
//                     <Text style={styles.txt3}>{weatherMock.temp}</Text>
//                 </View>
//                 <View style={styles.imgBox}>
//                     <Image source={images.sun}
//                         style={styles.Img} />
//                     <Text style={styles.txt}>{weatherMock.weather}</Text>
//                 </View>
//             </View>
//             <View style={styles.lastBox}>
//                 <Text style={styles.txt2}>{weatherMock.maxT} {weatherMock.minT}</Text>
//                 <Text style={styles.txt2}>{weatherMock.wind}</Text>
//             </View>
//         </View >
//     )
// }

// export default WeatherBox

import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './style';
import weatherMock from './weatherMock'
import images from '../../services/constans/images';


const WeatherBox = () => {
    const [currentTime, setCurrentTime] = useState(null);

    const date = new Date().getDay();
    const getCurrentTime = () => {
        let hour = new Date().getHours();
        let minutes = new Date().getMinutes();

        setCurrentTime(hour + ':' + minutes);
    };

    useEffect(() => {
        setInterval(() => {
            getCurrentTime();
        });
    }, 1000);

    return (
        <View style={styles.cardView}>
            <View style={styles.containerOne}>
                <View style={styles.timeView}>
                    <View style={styles.date}>
                        <Text style={styles.dateText}>{weatherMock.date}</Text>
                    </View>
                    <View style={styles.time}>
                        <Text style={styles.timeText}>{currentTime}</Text>
                    </View>
                </View>
                <View style={styles.degreView}>
                    <Text style={styles.degreText}>{weatherMock.temp}</Text>
                </View>
                <View style={styles.iconContainer}>
                    <View style={styles.iconView}>
                        <Image
                            style={styles.icon}
                            resizeMode={'center'}
                            source={images.cloud}
                        />
                    </View>
                    <View style={styles.iconTitleView}>
                        <Text style={styles.iconTitle}>{weatherMock.weather}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.containerTwo}>
                <View style={styles.latiudeView}>
                    <Text style={styles.texts}>{weatherMock.maxT} {weatherMock.minT}</Text>
                </View>
                <View style={styles.windView}>
                    <Text style={styles.texts}>{weatherMock.wind}</Text>
                </View>
            </View>
        </View>
    );
};

export default WeatherBox;