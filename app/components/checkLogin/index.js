import AsyncStorage from '@react-native-community/async-storage';
import User from '../../screens/registrScreen/index'

const CheckLogin = async () => {
    if (User.username === username && User.password === password) {
      await AsyncStorage.setItem('isLoggedIn', '1')
      navigation.navigate('App')
    }
    else {
      alert('Username or Password is incorrect')
    }
  }