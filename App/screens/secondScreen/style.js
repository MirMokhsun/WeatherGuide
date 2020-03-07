import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../services/constans/colors';

const screenWidth = Math.round(Dimensions.get('window').width);
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    txt:
    {
        color: colors.white,
        fontSize: 25,
        fontFamily: 'Roboto-Black'
    },
    buttStl:
    {
        height: 60,
        width: screenWidth - 10,
        marginTop: 15,
        marginLeft: 5,
        borderRadius: 3,
        backgroundColor: colors.halfBlack
    },
    touchOpStl:
    {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
})