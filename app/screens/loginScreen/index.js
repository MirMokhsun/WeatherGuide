import React from 'react';
import { View, KeyboardAvoidingView, ScrollView, ImageBackground, Dimensions } from 'react-native';
import { styles } from './style'
import ButtonBox from '../../components/loginComp/buttonBox';
import ImgBox from '../../components/loginComp/imgBox';
import InputBox from '../../components/loginComp/InputBox';


const Screenwidth = Math.round(Dimensions.get('window').width);
const Screenheight = Math.round(Dimensions.get('window').height);

export const LoginScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={styles.keyView} behavior="height" keyboardVerticalOffset="-250" keyboardShouldPersistTaps={'always'}>
      <ImageBackground source={require('../../assets/images/Background2.jpg')} style={styles.img}>
        <ScrollView>
          <View style={styles.container}>
            <ImgBox />
            <InputBox />
            <ButtonBox navigation={navigation} />
          </View>
        </ScrollView>
      </ImageBackground>
    </KeyboardAvoidingView >
  );
}


