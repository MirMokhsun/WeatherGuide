import React from 'react';
import { TouchableOpacity } from 'react-native';
import routs from '../../../services/constans/routs';
import iconsIonicons from '../../../services/constans/icons/iconsIonicons';

const ReturnButt = ({ navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(routs.Locations)}>
            {iconsIonicons.returnButt}
        </TouchableOpacity>
    );

}
export default ReturnButt