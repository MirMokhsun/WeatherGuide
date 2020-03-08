import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../../services/constans/colors'

const width = Math.round(Dimensions.get('window').width);

export const styles = StyleSheet.create({
    txtBut:
    {
        fontSize: 14,
        fontFamily: 'Roboto-Bold',
        color: colors.black
    },
    logBut:
    {
        width: "30%",
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        borderRadius: 35,
        width: width / 2.5,
        marginTop: 50,
        position: 'relative',
    }
})