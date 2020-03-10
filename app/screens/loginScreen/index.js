import React from 'react';
import { View, KeyboardAvoidingView, ScrollView, ImageBackground, Dimensions } from 'react-native';
import { styles } from './style'
import ButtonBox from '../../components/loginComp/buttonBox';
import ImgBox from '../../components/loginComp/imgBox';
import InputBox from '../../components/loginComp/InputBox';

// contentContainerStyle={{ justifyContent: 'center', alignSelf: 'auto' }} onContentSizeChange={(width, height) => {
//   console.log(width, height);
//   console.log(Screenwidth, Screenheight);

// }}
const Screenwidth = Math.round(Dimensions.get('window').width);
const Screenheight = Math.round(Dimensions.get('window').height);

export const LoginScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={styles.keyView} behavior="padding" keyboardVerticalOffset="-250">
      <ScrollView  >
        <ImageBackground source={require('../../assets/images/Background2.jpg')} style={styles.img}>
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


