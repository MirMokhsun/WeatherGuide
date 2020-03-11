import {StyleSheet} from 'react-native';
import colors from '../../services/constans/colors';

export const styles = StyleSheet.create({
  container: {
    height: '65%',
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
    // paddingVertical: '4%',
    borderBottomWidth: 1,
    height: '13.5%',
    width: '100%',
    borderColor: 'white',
    alignItems: 'center',
  },
  btnTxt: {
    color: colors.white,
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
  },
  btnView: {
    height: 120,
    width: 350,
    alignItems: 'center',
    paddingTop: '5%',
  },
  touchStl: {
    backgroundColor: 'black',
    width: '20%',
    height: '30%',
    alignItems: 'center',
    borderRadius: 25,
    justifyContent: 'center',
  },
});
