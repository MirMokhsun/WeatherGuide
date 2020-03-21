import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../services/constans/colors';
const width = Math.round(Dimensions.get('window').width);

export const styles = StyleSheet.create({
  txtInView: {
    flexDirection: 'row',
    borderColor: colors.white,
    borderWidth: 2,
    borderRadius: 25,
    height: 60,
    width: width / 1.5,
  },
  txtIn: {
    color: colors.white,
    height: 60,
    width: '100%',
    fontSize: 16,
    paddingLeft: 50,
  },
  icon: {
    width: 60,
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
