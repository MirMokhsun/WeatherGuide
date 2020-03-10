import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import onShare from '../../components/share';
import styles from './style';
import {
  bottomButLeft,
  bottomButRight,
} from '../../services/constans/icons/iconsAntDesign';

const BottomButtons = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onShare()}>
        {bottomButLeft}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onShare()}>
        {bottomButRight}
      </TouchableOpacity>
    </View>
  );
};

export default BottomButtons;
