import React from 'react';
import {TouchableOpacity} from 'react-native';
import {addHeader} from '../../services/constans/icons/iconsAntDesign';

const AdditionalHeaderLeft = ({navigation}) => {
  return (
    <TouchableOpacity
      style={{paddingLeft: 10}}
      onPress={() => navigation.goBack()}>
      {addHeader}
    </TouchableOpacity>
  );
};

export default AdditionalHeaderLeft;
