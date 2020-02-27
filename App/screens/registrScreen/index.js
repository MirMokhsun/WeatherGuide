import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Image, ScrollView } from 'react-native';
import colors from '../../services/constans/colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './style';
import AsyncStorage from '@react-native-community/async-storage';
import images from '../../services/constans/images'


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
          <View style={styles.VB1}>
            <View style={styles.txtInView}>
              <TextInput
                placeholder="Enter your email"
                style={styles.txtIn}
                onChangeText={text => setUsername(text)}
                value={username} />
              <View style={styles.txtIcon}>
                <Icon name="login" size={25} color={colors.emerald} />
              </View>
            </View>
          </View>
          <View style={styles.VB2}>
            <View style={styles.txtInView}>
              <TextInput
                placeholder="Enter your password"
                style={styles.txtIn}
                onChangeText={pass => setPassword(pass)}
                value={password} />
              <View style={styles.txtIcon}>
                <Icon name="textbox-password" size={25} color={colors.emerald} />
              </View>
            </View>
          </View>
          <View style={styles.VB2}>
            <View style={styles.txtInView}>
              <TextInput
                placeholder="Comfrim your password"
                style={styles.txtIn}
                onChangeText={pass => setPassword2(pass)}
                value={password2} />
              <View style={styles.txtIcon}>
                <Icon name="textbox-password" size={25} color={colors.emerald} />
              </View>
            </View>
          </View>
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


