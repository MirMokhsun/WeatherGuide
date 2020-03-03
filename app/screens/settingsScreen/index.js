import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import routs from '../../services/constans/routs'
import SettingBox from '../../components/settingMenu';

const SettingScreen = ({ navigation }) => {

    return (
        <View style={{ backgroundColor: 'red', flex: 1 }}>
            <Text> index </Text>
            <SettingBox />
        </View>
    );

}

export default SettingScreen
