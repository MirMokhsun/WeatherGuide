import React from 'react';
import {TouchableOpacity} from 'react-native';
import iconsAntDesign from '../../services/constans/icons/iconsAntDesign';

const AdditionalHeaderLeft = ({navigation}) => {
  return (
    <TouchableOpacity
      style={{paddingLeft: 10}}
      onPress={() => navigation.goBack()}>
      {iconsAntDesign.addHeader}
    </TouchableOpacity>
  );
};

export default AdditionalHeaderLeft;
