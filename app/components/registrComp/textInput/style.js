import {StyleSheet, Dimensions} from 'react-native';

const width = Math.round(Dimensions.get('window').width);

export const styles = StyleSheet.create({
  viewBox1: {
    flex: 0.2,
    marginTop: 10,
  },
  txtInView: {
    flexDirection: 'row',
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 25,
    height: 60,
    width: width / 1.5,
  },
  txtIn: {
    height: 60,
    width: '100%',
    fontSize: 16,
    paddingLeft: 50,
  },
  txtIcon: {
    width: 60,
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
