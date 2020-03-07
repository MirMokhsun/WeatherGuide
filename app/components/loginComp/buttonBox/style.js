import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../../services/constans/colors'

const width = Math.round(Dimensions.get('window').width);

export const styles = StyleSheet.create({
    btnBox:
    {
        flex: 1,
        marginTop: "20%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    regBut:
    {
        width: "30%",
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        borderRadius: 35,
        width: width / 2.5,
        position: 'relative',
    },
    appBut:
    {
        width: "30%",
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.white,
        borderRadius: 35,
        width: width / 2.5,
        marginTop: 16,
        position: 'relative',
    },
})