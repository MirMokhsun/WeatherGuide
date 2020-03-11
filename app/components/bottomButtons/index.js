import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import onShare from '../../components/share';
import styles from './style';
import iconsAntDesign from '../../services/constans/icons/iconsAntDesign';

const BottomButtons = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onShare()}>
        {iconsAntDesign.bottomButLeft}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onShare()}>
        {iconsAntDesign.bottomButRight}
      </TouchableOpacity>
    </View>
  );
};

export default BottomButtons;
