import React from 'react';
import { View, Text, TouchableHighlight, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';
import detailMock from '../../../../../__mocks__/detailMock';
import iconsFontisto from '../../../../services/constans/icons/iconsFontisto';
import iconsFontAwesome from '../../../../services/constans/icons/iconsFontAwesome';

const ModalHead = ({ setModalVisible }) => {
    return (
        <View style={styles.modalHead}>
            <View style={styles.headLeft}>
                <Text style={styles.time}>{detailMock.time}</Text>
                <Text style={styles.date}>{detailMock.date}</Text>
                <View style={styles.leftIview}>
                    {iconsFontisto.umbrella}
                    <Text style={styles.rain}>{detailMock.rain}</Text>
                </View>
            </View>
            <View style={styles.tempView}>
                <Text style={styles.temp}>{detailMock.temp}</Text>
            </View>
            <View style={styles.headRight}>
                {iconsFontisto.clear}
                <Text style={styles.weather}>{detailMock.weather}</Text>
            </View>
            <TouchableHighlight
                style={styles.retBut}
                onPress={() => {
                    setModalVisible(false)
                }}>
                {iconsFontAwesome.close}
            </TouchableHighlight>
        </View>
    )
}

export default ModalHead