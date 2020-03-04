import React from 'react';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { styles } from './style';
import ImgBox from '../../components/registrComp/imgBox';
import InputBox from '../../components/registrComp/inputBox';
import ButtonBox from '../../components/registrComp/buttonBox';

export const RegistrScreen = ({ navigation }) => {

  return (
    <KeyboardAvoidingView style={styles.keyView} behavior="padding" keyboardVerticalOffset="-250" keyboardShouldPersistTaps={'always'}
      showsVerticalScrollIndicator={false}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scView}>
        <ImgBox />
        <InputBox />
        <ButtonBox navigation={navigation} />
      </ScrollView>
    </KeyboardAvoidingView >
  );
}


