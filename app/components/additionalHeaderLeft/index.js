import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../../services/constans/colors';
import {TouchableOpacity} from 'react-native';

const AdditionalHeaderLeft = ({navigation}) => {
  return (
    <TouchableOpacity
      style={{paddingLeft: 10}}
      onPress={() => navigation.goBack()}>
      <Icon name="left" size={30} color={colors.white} />
    </TouchableOpacity>
  );
};

export default AdditionalHeaderLeft;
