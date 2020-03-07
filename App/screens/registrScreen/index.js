import React from 'react';
import { KeyboardAvoidingView, ScrollView, View, ImageBackground, Dimensions } from 'react-native';
import { styles } from './style';
import ImgBox from '../../components/registrComp/imgBox';
import InputBox from '../../components/registrComp/inputBox';
import ButtonBox from '../../components/registrComp/buttonBox';
export const height = Math.round(Dimensions.get('window').height);

export const RegistrScreen = ({ navigation }) => {

  return (
    <KeyboardAvoidingView style={styles.keyView} behavior="padding" keyboardVerticalOffset="-250" keyboardShouldPersistTaps={'always'}>
      <ScrollView >
        <ImageBackground source={require('../../assets/images/Background2.jpg')} style={{ height: height }}>
          <View style={styles.container}>
            <ImgBox />
            <InputBox />
            <ButtonBox navigation={navigation} />
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView >
  );
}


