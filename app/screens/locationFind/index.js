import React from 'react';
import { ScrollView, KeyboardAvoidingView } from 'react-native';
import iconsSimpleLineIcons from '../../services/constans/icons/iconsSimpleLineIcons';
import styles from './style'
import ReturnButt from '../../components/locationFindComp/returnButt';
import TextInputFinder from '../../components/locationFindComp/textInput';

const LocationFind = ({ navigation }) => {
    return (
        <KeyboardAvoidingView style={styles.keyView} behavior="height" keyboardVerticalOffset="0" >
            <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainerStyle}>
                {iconsSimpleLineIcons.Magnifier}
                <TextInputFinder />
                <ReturnButt navigation={navigation} />
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default LocationFind;