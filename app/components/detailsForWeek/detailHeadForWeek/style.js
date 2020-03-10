import {StyleSheet} from 'react-native';
import colors from '../../../services/constans/colors';

const styles = StyleSheet.create({
  compHead: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: colors.halfBlack,
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: 'center',
  },
  headLeft: {
    flex: 1.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftBottom: {
    flexDirection: 'row',
  },
  tempView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tempTxt: {
    color: colors.white,
    fontSize: 30,
  },
  headRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    color: colors.white,
    fontSize: 13,
  },
  date: {
    color: colors.white,
    fontSize: 10,
  },
  rain: {
    color: colors.white,
    fontSize: 15,
    paddingLeft: 10,
  },
  temp: {
    color: colors.white,
    fontSize: 35,
  },
  weather: {
    color: colors.white,
    fontSize: 14,
  },
});

export default styles;
