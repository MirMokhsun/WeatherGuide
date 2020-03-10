import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import onShare from '../../components/share';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './style';

const BottomButtons = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onShare()}>
        <Icon name="sharealt" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onShare()}>
        <Icon name="staro" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default BottomButtons;
