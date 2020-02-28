import React, { useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Image, ScrollView } from 'react-native';
import { styles } from './style';
import AsyncStorage from '@react-native-community/async-storage';
import images from '../../services/constans/images'
import textInput from '../../components/registrComp'

export const RegistrScreen = ({ navigation }) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const User = { username: '', password: '' }

  const CheckLogin = async () => {
    if (!User.username && !User.password && !User.password2) {
      await AsyncStorage.setItem('isLoggedIn', '1')
      navigation.navigate('LoginScreen')
    }
    else {
      alert('Username or Password is incorrect')
    }
  }

  return (
    <KeyboardAvoidingView style={styles.keyView} behavior="padding" keyboardVerticalOffset="-250" keyboardShouldPersistTaps={'always'}
      showsVerticalScrollIndicator={false}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.scView}>
        <View style={styles.imgBox}>
          <Image
            source={images.logo}
            style={styles.img} />
          <Text style={styles.txt}>Weather Guide</Text>
        </View>
        <View style={styles.InputsView}>
          {textInput('Enter your email', setUsername, 'login', username)}
          {textInput('Enter your password', setPassword, 'textbox-password', password)}
          {textInput('Comfrim your password', setPassword2, 'textbox-password', password2)}
        </View>
        <View style={styles.btnBox}>
          <TouchableOpacity style={styles.logBut} onPress={CheckLogin}>
            <Text style={styles.txtBut}>Go To Login Page</Text>
          </TouchableOpacity >
        </View>
      </ScrollView>
    </KeyboardAvoidingView >
  );
}


