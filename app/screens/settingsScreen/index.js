import React from 'react';
import {View, Text} from 'react-native';
import SettingBox from '../../components/settingMenu';
import {styles} from './style';
import colors from '../../services/constans/colors';
import texts from '../../services/constans/texts';

const SettingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}> {texts.SETTINGS} </Text>
      <SettingBox navigation={navigation} />
    </View>
  );
};

export default SettingScreen;
