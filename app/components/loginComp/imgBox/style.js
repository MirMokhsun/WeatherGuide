import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../../services/constans/colors'

const width = Math.round(Dimensions.get('window').width);

export const styles = StyleSheet.create({
    image:
    {
        maxHeight: 145,
        maxWidth: 145,
        marginTop: 10,
        paddingTop: 10
    },
    txt:
    {
        marginTop: 5,
        fontSize: 30,
        fontFamily: 'Roboto-Black',
    },
    imageBox:
    {
        flex: 2,
        alignItems: 'center',
        marginTop: 10
    },
})