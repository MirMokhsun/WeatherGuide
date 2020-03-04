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
})