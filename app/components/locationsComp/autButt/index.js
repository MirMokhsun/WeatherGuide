import React, { useState } from 'react';
import { View, Text } from 'react-native';
import SwitchButton from 'switch-button-react-native';
import { styles } from './style';
import texts from '../../../services/constans/texts';
import iconsEntypo from '../../../services/constans/icons/iconsEntypo';

const AutoButt = ({ navigation }) => {
    const [activeSwitch, setActiveSwitch] = useState(1)

    return (
        <View style={styles.autBtn}>
            {iconsEntypo.autButt}
            <Text style={styles.autTxt}> {texts.AUT_BUTT}</Text>
            <SwitchButton onValueChange={() => setActiveSwitch(2)} />
        </View>
    )
}
export default AutoButt