import React, { useState } from 'react';
import { View, Text, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import { styles } from './style';
import images from '../../services/constans/images'
import AsyncStorage from '@react-native-community/async-storage';
import { Buttons, textInput, goTo } from '../../components/loginComp'

export const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const User = { username: '', password: '' }

  const checkLogin = async () => {
    if (User.username === username && User.password === password) {
      await AsyncStorage.setItem('isLoggedIn', '1')
      navigation.navigate('App')
    }
    else {
      alert('Username or Password is incorrect')
    }
  }

  return (
    <KeyboardAvoidingView style={styles.keyView} behavior="padding" keyboardVerticalOffset="-250" keyboardShouldPersistTaps={'always'}
      showsVerticalScrollIndicator={false}>
      <ScrollView style={{ flex: 1 }} >
        <View style={styles.container}>
          <View style={styles.imageBox}>
            <Image
              source={images.logo}
              style={styles.image} />
            <Text style={styles.txt}>Weather Guide</Text>
          </View>
          <View style={styles.InputsView}>
            <View style={styles.VB1}>
              {textInput('Enter your email', setUsername, 'login', username)}
            </View>
            <View style={styles.VB2}>
              {textInput('Enter your password', setPassword, 'textbox-password', password)}
            </View>
          </View>
          <View style={styles.btnBox}>
            <View style={styles.regBut}>
              {Buttons('Go To Registration', goTo)}
            </View>
            <View style={styles.appBut}>
              {Buttons('Go To Appflow', checkLogin)}
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView >
  );
}


