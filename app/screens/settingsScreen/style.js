import { StyleSheet } from 'react-native'
import colors from '../../services/constans/colors';

export const styles = StyleSheet.create({
    container:
    {
        backgroundColor: colors.halfBlack,
        flex: 1,
        alignItems: 'center',
        paddingTop: 20
    },
    txt:
    {
        color: colors.halfBlack,
        fontSize: 35,
        fontFamily: 'Roboto-Bold'
    },
})