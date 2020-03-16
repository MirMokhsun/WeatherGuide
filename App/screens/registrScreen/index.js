import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  View,
  ImageBackground,
} from 'react-native';
import {styles} from './style';
import ImgBox from '../../components/registrComp/imgBox';
import InputBox from '../../components/registrComp/inputBox';
import ButtonBox from '../../components/registrComp/buttonBox';
import constans from '../../services/constans/images';

export const RegistrScreen = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      style={styles.keyView}
      behavior="padding"
      keyboardVerticalOffset="-250"
      keyboardShouldPersistTaps={'always'}>
      <ImageBackground source={constans.background2} style={styles.img}>
        <ScrollView style={styles.scrool}>
          <View style={styles.container}>
            <ImgBox />
            <InputBox />
            <ButtonBox navigation={navigation} />
          </View>
        </ScrollView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};
