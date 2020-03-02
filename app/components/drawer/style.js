import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../services/constans/colors';

const screenWidth = Math.round(Dimensions.get('window').width);

export const styles = StyleSheet.create({

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