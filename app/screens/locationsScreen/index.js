import React from 'react';
import {View} from 'react-native';
import {styles} from './style';
import AddLoc from '../../components/locationsComp/addLoc';
import ListHeader from '../../components/locationsComp/listHeader';
import AutoButt from '../../components/locationsComp/autButt';

const Locations = ({navigation}) => {
  return (
    <View style={styles.container}>
      <AddLoc navigation={navigation} />
      <ListHeader />
      <AutoButt />
    </View>
  );
};
export default Locations;
