import React from 'react';
import { View, Text } from 'react-native';
import SettingBox from '../../components/settingMenu';
import { styles } from './style'
import colors from '../../services/constans/colors';

const SettingScreen = ({ navigation }) => {

    return (
        <View style={{ backgroundColor: colors.halfBlack, flex: 1, alignItems: 'center', paddingTop: 20 }}>
            <Text style={styles.txt}> Settings </Text>
            <SettingBox navigation={navigation} />
        </View>
    );

}

export default SettingScreen
