import AsyncStorage from '@react-native-community/async-storage';
import User from '../../screens/registrScreen/index';
import routs from '../../services/constans/routs';

const CheckLogin = async () => {
  if (User.username === username && User.password === password) {
    await AsyncStorage.setItem('isLoggedIn', '1');
    navigation.navigate(routs.App);
  } else {
    alert('Username or Password is incorrect');
  }
};
export default CheckLogin;
