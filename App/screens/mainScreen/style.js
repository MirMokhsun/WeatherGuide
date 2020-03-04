import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../services/constans/colors';

const screenWidth = Math.round(Dimensions.get('window').width);

export const styles = StyleSheet.create({
    container:
    {
        backgroundColor: colors.halfBlack,
        flex: 1,
    },
    weatherBoxTwo: {
        width: screenWidth - 10,
        marginTop: 25,
        marginLeft: 5,
        borderRadius: 3,
        backgroundColor: colors.halfBlack
    },

})