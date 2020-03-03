import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../services/constans/colors';

export const styles = StyleSheet.create({
    drawerContent:
    {
        flex: 1,
        marginHorizontal: 10,
    },
    container:
    {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    txtSett:
    {
        color: colors.white,
        fontSize: 45,
        fontFamily: 'Roboto-Bold'
    },
    touch:
    {
        flexDirection: 'row-reverse',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txt:
    {
        color: colors.white,
        fontSize: 18,
        fontFamily: 'Roboto-Bold'
    },
})