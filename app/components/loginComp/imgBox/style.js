import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../../services/constans/colors'

const width = Math.round(Dimensions.get('window').width);

export const styles = StyleSheet.create({
    image:
    {
        maxHeight: 160,
        maxWidth: 160,
        marginTop: 10,
        paddingTop: 10
    },
    txt:
    {
        paddingTop: 15,
        fontSize: 30,
        fontFamily: 'Roboto-Black',
        color: colors.white
    },
    imageBox:
    {
        flex: 2,
        alignItems: 'center',
        marginTop: 10
    },
})