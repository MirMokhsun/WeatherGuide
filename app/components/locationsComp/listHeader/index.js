import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './style';
import texts from '../../../services/constans/texts';

const ListHeader = ({ navigation }) => {
    return (
        <View style={styles.listHead}>
            <Text style={styles.txtHead}>{texts.YOUR_LOC}</Text>
        </View>
    )
}
export default ListHeader