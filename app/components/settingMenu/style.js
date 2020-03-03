import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../services/constans/colors';


export const styles = StyleSheet.create({
    container:
    {
        height: "65%",
        width: "90%",
        marginTop: 15,
        borderRadius: 3,
        backgroundColor: colors.halfBlack,
    },
    txt:
    {
        color: colors.white,
        fontSize: 20,
        fontFamily: 'Roboto-Bold'
    },
})