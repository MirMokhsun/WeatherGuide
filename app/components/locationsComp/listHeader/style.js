import { StyleSheet } from 'react-native'
import colors from '../../../services/constans/colors';

export const styles = StyleSheet.create({
    listHead:
    {
        backgroundColor: colors.headerDark,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        height: "10%"
    },
    txtHead:
    {
        fontSize: 20,
        paddingLeft: 20,
        color: 'white',
        fontFamily: 'Roboto-Black'
    },
})