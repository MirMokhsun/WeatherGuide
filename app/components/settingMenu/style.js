import { StyleSheet } from 'react-native';
import colors from '../../services/constans/colors';

export const styles = StyleSheet.create({
  container: {
    height: '55%',
    width: '90%',
    marginTop: 15,
    borderRadius: 3,
    backgroundColor: colors.halfBlack,
  },
  txt: {
    marginLeft: 20,
    color: colors.white,
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
  },
  switchCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 10,
    borderBottomWidth: 1,
    height: '20%',
    width: '100%',
    borderColor: 'white',
    alignItems: 'center',
  },
  btnTxt: {
    color: colors.white,
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
  },
  touchStl: {
    marginTop: 10,
    alignSelf: 'center',
    backgroundColor: colors.black,
    width: '20%',
    height: '10%',
    alignItems: 'center',
    borderRadius: 25,
    justifyContent: 'center',
  },
});
