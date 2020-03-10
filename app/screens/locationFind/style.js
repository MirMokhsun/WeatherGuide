import {StyleSheet} from 'react-native';
import colors from '../../services/constans/colors';

const styles = StyleSheet.create({
  keyView: {
    backgroundColor: colors.darkBlue,
    height: '100%',
    alignItems: 'center',
    paddingTop: 20,
  },
  scrollView: {
    flex: 1,
  },
  contentContainerStyle: {
    borderWidth: 1,
    borderColor: 'white',
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
