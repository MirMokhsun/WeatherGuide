import React from 'react';
import { View, Modal } from 'react-native';
import styles from './styles';
import ModalHead from './modalHead';
import ModalTxt from './modalTxt';

const ModalView = ({ modalVisible, setModalVisible }) => {
    return (
        <Modal
            animationType="fade"
            visible={modalVisible}
            transparent={true}
            onRequestClose={() => {
                setModalVisible(false);
            }}>
            <View style={styles.container}>
                <ModalHead setModalVisible={setModalVisible} />
                <ModalTxt />
            </View>
        </Modal>
    )
}

export default ModalView