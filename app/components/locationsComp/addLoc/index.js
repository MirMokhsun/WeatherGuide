import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import iconsMaterialComunityIcons from '../../../services/constans/icons/iconsMaterialComunityIcons';
import routs from '../../../services/constans/routs';
import {styles} from './style';
import texts from '../../../services/constans/texts';

const AddLoc = ({navigation}) => {
  return (
    <TouchableOpacity
      style={styles.addLoc}
      onPress={() => navigation.navigate(routs.LocationFind)}>
      {iconsMaterialComunityIcons.Locations}
      <Text style={styles.txt}>{texts.ADD_LOCS}</Text>
    </TouchableOpacity>
  );
};
export default AddLoc;
