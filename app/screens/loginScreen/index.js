import React from 'react';
import { View, KeyboardAvoidingView, ScrollView } from 'react-native';
import { styles } from './style'
import ButtonBox from '../../components/loginComp/buttonBox';
import ImgBox from '../../components/loginComp/imgBox';
import InputBox from '../../components/loginComp/InputBox';

export const LoginScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={styles.keyView} behavior="padding" keyboardVerticalOffset="-250" keyboardShouldPersistTaps={'always'}>
      <ScrollView >
        <View style={styles.container}>
          <ImgBox />
          <InputBox />
          <ButtonBox navigation={navigation} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView >
  );
}


