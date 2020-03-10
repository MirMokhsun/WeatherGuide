import {StyleSheet} from 'react-native';
import colors from '../../services/constans/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  txt: {
    color: colors.white,
    fontSize: 35,
    fontFamily: 'Roboto-Bold',
  },
});
