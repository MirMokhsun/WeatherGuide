import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './style';
import ModalTxt from '../detailComp/modalView/modalTxt';
import Icon from 'react-native-vector-icons/FontAwesome';
import routs from '../../services/constans/routs';


const WeatherDetails = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', flex: 4 }}>
                <View style={{ flex: 1.3, justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name='cloud' size={70} color={'white'} />
                </View>
                <View style={{ flex: 3 }}>
                    <ModalTxt />
                </View>
            </View>
            <TouchableOpacity style={styles.rowThree} onPress={() => navigation.navigate(routs.DetailsScreen)}>
                <Text style={styles.more}>{texts.DETAILS}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default WeatherDetails;
