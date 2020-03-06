import React from 'react';
import { View, Text, } from 'react-native';
import styles from './style';
import detailMock from '../../../../../__mocks__/detailMock';

const ModalTxt = () => {
    return (
        <View style={styles.txtView}>
            <Text style={styles.txt}>{detailMock.precipitation}</Text>
            <Text style={styles.txt}>{detailMock.cooling}</Text>
            <Text style={styles.txt}>{detailMock.cloud}</Text>
            <Text style={styles.txt}>{detailMock.moon_phase}</Text>
            <Text style={styles.txt}>{detailMock.wind_velocity}</Text>
            <Text style={styles.txt}>{detailMock.humid}</Text>
            <Text style={styles.txt}>{detailMock.dew_point}</Text>
            <Text style={styles.txt}>{detailMock.pressure}</Text>
            <Text style={styles.txt}>{detailMock.index_ultr}</Text>
            <Text style={styles.txt}>{detailMock.wind_dir}</Text>
        </View>
    )
}

export default ModalTxt