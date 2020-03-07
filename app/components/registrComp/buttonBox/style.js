import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../../services/constans/colors'

const width = Math.round(Dimensions.get('window').width);

export const styles = StyleSheet.create({
    txtBut:
    {
        fontSize: 14,
        fontFamily: 'Roboto-Bold',
        color: colors.emerald
    },
    logBut:
    {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.halfBlack,
        borderRadius: 35,
        width: width / 2.5,
        position: 'relative',
        marginTop: 10,
        marginBottom: 40
    }
})