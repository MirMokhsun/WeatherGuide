import {StyleSheet} from 'react-native';
import colors from '../../../services/constans/colors';

export const styles = StyleSheet.create({
  imgBox: {
    flex: 1.5,
    alignItems: 'center',
  },
  img: {
    maxHeight: 160,
    maxWidth: 160,
    marginTop: 10,
  },
  txt: {
    paddingTop: 15,
    fontSize: 30,
    fontFamily: 'Roboto-Black',
    color: colors.white,
  },
});
