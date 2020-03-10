import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import DetailsHeadForWeek from '../detailHeadForWeek';
import DetailsTextForWeek from '../detailTxtForWeek';
import DetailsButtForWeek from '../detailButtForWeek';
import ModalViewForWeek from '../modalViewForWeek';

const DetailsCompWeek = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <DetailsHeadForWeek />
      <DetailsTextForWeek />
      <DetailsButtForWeek setModalVisible={setModalVisible} />
      <ModalViewForWeek
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

export default DetailsCompWeek;
