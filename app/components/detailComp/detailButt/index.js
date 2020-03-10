import React from 'react';
import {Text, TouchableHighlight} from 'react-native';
import styles from './styles';
import detailMock from '../../../../__mocks__/detailMock';

const DetailsButt = ({setModalVisible}) => {
  return (
    <TouchableHighlight
      style={styles.modalButt}
      onPress={() => setModalVisible(true)}>
      <Text style={styles.modalTxt}>{detailMock.details}</Text>
    </TouchableHighlight>
  );
};

export default DetailsButt;
