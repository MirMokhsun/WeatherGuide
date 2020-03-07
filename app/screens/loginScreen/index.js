import React from 'react';
import { View, KeyboardAvoidingView, ScrollView, ImageBackground, Dimensions } from 'react-native';
import { styles } from './style'
import ButtonBox from '../../components/loginComp/buttonBox';
import ImgBox from '../../components/loginComp/imgBox';
import InputBox from '../../components/loginComp/InputBox';
export const height = Math.round(Dimensions.get('window').height);

export const LoginScreen = ({ navigation }) => {
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


