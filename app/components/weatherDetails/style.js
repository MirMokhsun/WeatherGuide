import {StyleSheet} from 'react-native';
import colors from '../../services/constans/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 280,
    borderRadius: 6,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 6,
    backgroundColor: colors.halfBlack,
  },
  rowThree: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  more: {
    fontSize: 15,
    paddingRight: 10,
    color: 'orange',
    textDecorationLine: 'underline',
  },
});

export default styles;
