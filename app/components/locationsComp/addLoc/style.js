import {StyleSheet} from 'react-native';
import colors from '../../../services/constans/colors';

export const styles = StyleSheet.create({
  addLoc: {
    backgroundColor: colors.darkBlue,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  txt: {
    fontSize: 20,
    paddingLeft: 5,
    color: 'white',
    fontFamily: 'Roboto-Black',
  },
});
