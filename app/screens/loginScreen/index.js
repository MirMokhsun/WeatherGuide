import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, Keyboard, ScrollView } from 'react-native';
import colors from '../../services/constans/colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './style';
import images from '../../services/constans/images'
import AsyncStorage from '@react-native-community/async-storage';


export const LoginScreen = ({ navigation }) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const User = { username: '', password: '' }

  const CheckLogin = async () => {
    if (User.username === username && User.password === password) {
      await AsyncStorage.setItem('isLoggedIn', '1')
      navigation.navigate('App')
    }
    else {
      alert('Username or Password is incorrect')
    }
  }
  var _scrollToBottomY

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
              <View style={styles.txtInView}>
                <TextInput
                  placeholder="Enter your email"
                  style={styles.txtIn}
                  onChangeText={text => setUsername(text)}
                  value={username} />
                <View style={styles.icon}>
                  <Icon name="login" size={25} color={colors.emerald} />
                </View>
              </View>
            </View>
            <View style={styles.VB2}>
              <View style={styles.txtInView}>
                <View style={{ width: '100%', }}>
                  <TextInput
                    placeholder="Enter your password"
                    style={styles.txtIn}
                    onChangeText={pass => setPassword(pass)}
                    value={password}
                  />
                </View>
                <View style={styles.icon}>
                  <Icon name="textbox-password" size={25} color={colors.emerald} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.btnBox}>
            <View style={styles.regBut}>
              <TouchableOpacity onPress={() => { navigation.navigate('RegistrScreen') }}>
                <Text style={styles.txtBut}>Go To Registration</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.appBut}>
              <TouchableOpacity onPress={CheckLogin}>
                <Text style={styles.txtBut}>Go To Appflow</Text>
              </TouchableOpacity >
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView >
  );
}


