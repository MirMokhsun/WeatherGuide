import React from 'react';
import { View, Text } from 'react-native';
import styles from './style'
import detailMock from '../../../../__mocks__/detailMock';
import iconsFontisto from '../../../services/constans/icons/iconsFontisto';

const DetailsHead = () => {
    return (
        <View style={styles.compHead}>
            <View style={styles.headLeft}>
                <Text style={styles.time}>{detailMock.time}</Text>
                <Text style={styles.date}>{detailMock.date}</Text>
                <View style={styles.leftBottom}>
                    {iconsFontisto.umbrella}
                    <Text style={styles.rain}>{detailMock.rain}</Text>
                </View>
            </View>
            <View style={styles.tempView}>
                <Text style={styles.tempTxt}>{detailMock.temp}</Text>
            </View>
            <View style={styles.headRight}>
                {iconsFontisto.clear}
                <Text style={styles.weather}>{detailMock.weather}</Text>
            </View>
        </View>
    );
}


export default DetailsHead
