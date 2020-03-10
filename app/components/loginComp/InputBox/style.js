import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../services/constans/colors';

const width = Math.round(Dimensions.get('window').width);

export const styles = StyleSheet.create({
  InputsView: {
    flex: 1,
    position: 'relative',
    marginTop: '5%',
  },
  inputView: {
    height: 20,
  },
  inputView2: {
    height: 20,
    marginTop: 60,
  },
});
