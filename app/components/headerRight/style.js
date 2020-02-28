import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../services/constans/colors';

const screenWidth = Math.round(Dimensions.get('window').width);

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    txt: {
        marginLeft: 30,
        fontSize: 45,
        fontFamily: 'OdibeeSans-Regular'
    },
    qwe: {
        marginTop: 4,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    Img: { marginLeft: 10, width: 35, height: 50 },
    WB: {
        height: 125,
        width: screenWidth - 10,
        marginTop: 15,
        marginLeft: 5,
        borderRadius: 3,
        backgroundColor: colors.halfBlack
    },
    WBH: {
        height: 150,
        width: screenWidth - 10,
        marginTop: 25,
        marginLeft: 5,
        borderRadius: 3,
        backgroundColor: colors.halfBlack
    },
    WBD: {
        height: 150,
        width: screenWidth - 10,
        marginTop: 15,
        marginLeft: 5,
        borderRadius: 3,
        backgroundColor: colors.halfBlack
    },
})