import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {styles} from './style';
import ButtonBox from '../../components/loginComp/buttonBox';
import ImgBox from '../../components/loginComp/imgBox';
import InputBox from '../../components/loginComp/InputBox';
import constans from '../../services/constans/images';

export const LoginScreen = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      style={styles.keyView}
      behavior="padding"
      keyboardVerticalOffset="-250">
      <ScrollView>
        <ImageBackground source={constans.background2} style={styles.img}>
          <View style={styles.container}>
            <ImgBox />
            <InputBox />
            <ButtonBox navigation={navigation} />
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
