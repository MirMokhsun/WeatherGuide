import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../services/constans/colors';

const screenWidth = Math.round(Dimensions.get('window').width);

export const styles = StyleSheet.create({
    container:
    {
        backgroundColor: colors.halfBlack,
        flex: 1,
    },
    txt:
    {
        marginTop: 5,
        fontSize: 18,
        fontFamily: 'Roboto-Black'
    },
    VB: {
        marginTop: 4,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    Img:
    {
        marginLeft: 10,
        width: 35,
        height: 50
    },

    weatherBoxTwo: {
        flex: 2,
        height: 150,
        width: screenWidth - 10,
        marginTop: 25,
        marginLeft: 5,
        borderRadius: 3,
        backgroundColor: colors.halfBlack
    },

})