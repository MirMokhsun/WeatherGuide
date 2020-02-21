import {StyleSheet} from 'react-native'
import colors from '../../services/constans/colors'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.pBlue,
    },
    txt: {
        fontSize: 45,
        fontFamily: 'OdibeeSans-Regular'
    }
})