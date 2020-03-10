import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import DetailsHead from '../detailHead';
import DetailsText from '../detailTxt';
import DetailsButt from '../detailButt';
import ModalView from '../modalView';

const DetailsComp = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <DetailsHead />
      <DetailsText />
      <DetailsButt setModalVisible={setModalVisible} />
      <ModalView
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

export default DetailsComp;
