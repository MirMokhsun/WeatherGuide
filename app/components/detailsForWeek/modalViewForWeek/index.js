import React from 'react';
import {View, Modal} from 'react-native';
import styles from './styles';
import ModalHeadForWeek from './modalHead';
import ModalTxtForWeek from './modalTxt';

const ModalViewForWeek = ({modalVisible, setModalVisible}) => {
  return (
    <Modal
      animationType="fade"
      visible={modalVisible}
      transparent={true}
      onRequestClose={() => {
        setModalVisible(false);
      }}>
      <View style={styles.container}>
        <ModalHeadForWeek setModalVisible={setModalVisible} />
        <ModalTxtForWeek />
      </View>
    </Modal>
  );
};

export default ModalViewForWeek;
