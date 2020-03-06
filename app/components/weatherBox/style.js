import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../services/constans/colors';

const screenWidth = Math.round(Dimensions.get('window').width);

export const styles = StyleSheet.create({
    container:
    {
        height: 160,
        width: screenWidth - 10,
        marginTop: 15,
        marginLeft: 5,
        borderRadius: 3,
        backgroundColor: colors.halfBlack
    },
    firstBox:
    {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 3,
        marginTop: 5
    },
    dateBox:
    {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tempBox:
    {
        flex: 1.25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgBox:
    {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    lastBox:
    {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        marginTop: 2
    },
    txt:
    {
        fontSize: 18,
        fontFamily: 'Roboto-Black'
    },
    txt2:
    {
        fontSize: 18,
        fontFamily: 'Roboto'
    },
    txt3:
    {
        fontSize: 90,
        fontFamily: 'RobotoThinItalic-pqYK'
    },
    Img:
    {
        maxHeight: 65,
        maxWidth: 65
    },
})