import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import colors from '../../services/constans/colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './style';
import AsyncStorage from '@react-native-community/async-storage';


export const RegistrScreen = ({ navigation }) => {


  console.log(navigation);

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const User = { username: '', password: '' }

  const CheckLogin = async () => {
    if (User.username === username && User.password === password && User.password === password2) {
      await AsyncStorage.setItem('isLoggedIn', '1')
      navigation.navigate('LoginScreen')
    }
    else {
      alert('Username or Password is incorrect')
    }
  }


  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset="-250" enabled>
      <View style={{ flex: 1, backgroundColor: colors.halfBlack, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.InputsView}>
          <View style={styles.VB1}>
            <View style={styles.txtInView}>
              <TextInput
                placeholder="Enter your email"
                style={styles.txtIn}
                onChangeText={text => setUsername(text)}
                value={username} />
              <View style={{ width: 60, height: '100%', position: 'absolute', justifyContent: 'center', alignItems: 'center', }}>
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
                  value={password} />
              </View>
              <View style={{ width: 60, height: '100%', position: 'absolute', justifyContent: 'center', alignItems: 'center', }}>
                <Icon name="textbox-password" size={25} color={colors.emerald} />
              </View>
            </View>
          </View>
          <View style={styles.VB2}>
            <View style={styles.txtInView}>
              <View style={{ width: '100%', }}>
                <TextInput
                  placeholder="Comfrim your password"
                  style={styles.txtIn}
                  onChangeText={pass => setPassword2(pass)}
                  value={password2} />
              </View>
              <View style={{ width: 60, height: '100%', position: 'absolute', justifyContent: 'center', alignItems: 'center', }}>
                <Icon name="textbox-password" size={25} color={colors.emerald} />
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginTop: "12%" }}>
          <TouchableOpacity style={styles.logBut} onPress={CheckLogin}>
            <Text style={styles.txt}>Go To Login Page</Text>
          </TouchableOpacity >
        </View>
      </View>
    </KeyboardAvoidingView >
  );
}


