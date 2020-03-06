import React from 'react';
import { ScrollView } from 'react-native';
import styles from './style';
import DetailsComp from '../../components/detailComp/detailBox';

const DetailsScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <DetailsComp />
            <DetailsComp />
            <DetailsComp />
            <DetailsComp />
            <DetailsComp />
        </ScrollView >
    );
}


export default DetailsScreen
