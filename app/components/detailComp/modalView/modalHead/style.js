import { StyleSheet } from 'react-native';
import colors from '../../../../services/constans/colors';


const styles = StyleSheet.create({
    modalHead:
    {
        flex: 1.5,
        flexDirection: 'row',
        borderBottomColor: 'yellow',
        borderBottomWidth: 1,
        width: "90%",
        alignSelf: 'center'
    },
    headLeft:
    {
        flex: 1.3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    leftIview:
    {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '40%'
    },
    tempView:
    {
        flex: 1.6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headRight:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    retBut:
    {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    time:
    {
        color: colors.white,
        fontSize: 13
    },
    date:
    {
        color: colors.white,
        fontSize: 10
    },
    rain:
    {
        color: colors.white,
        fontSize: 11
    },
    temp:
    {
        color: colors.white,
        fontSize: 35,
    },
    weather:
    {
        color: colors.white,
        fontSize: 14,
    },
});

export default styles