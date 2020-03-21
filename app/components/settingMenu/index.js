import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import Switcher from './switcher';
import routs from '../../services/constans/routs';
import texts from '../../services/constans/texts';
import setItems from '../../../__mocks__/settings';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../services/constans/colors';


const SettingBox = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {setItems.map(({ iconName, text, title1, title2, onPress }) => {
        return (
          <View style={styles.switchCont}>
            <Icon name={iconName} size={25} color={colors.emerald} />
            <Text style={styles.txt}>{text}</Text>
            <Switcher title1={title1} title2={title2} onPress={onPress} />
          </View>
        )
      })}
      <TouchableOpacity
        onPress={() => navigation.navigate(routs.LoginScreen)}
        style={styles.touchStl}>
        <Text style={styles.btnTxt}>{texts.DONE}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingBox;
