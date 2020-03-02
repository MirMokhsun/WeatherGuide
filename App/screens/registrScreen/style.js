import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../services/constans/colors'

const width = Math.round(Dimensions.get('window').width);

export const styles = StyleSheet.create({
    keyView:
    {
        flex: 1,
        backgroundColor: colors.halfBlack
    },
    scView:
    {
        alignItems: 'center',
        justifyContent: 'center'
    },
    container:
    {
        flex: 1,
        backgroundColor: colors.halfBlack,
        alignItems: 'center',
        justifyContent: 'center'
    },
    InputsView:
    {
        flex: 1,
        position: 'relative'
    },
    txt:
    {
        marginTop: 5,
        fontSize: 30,
        fontFamily: 'Roboto-Black',
    },
    txtBut:
    {
        fontSize: 14,
        fontFamily: 'Roboto-Bold',
        color: colors.emerald
    },
    logBut:
    {
        width: "30%", height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.halfBlack,
        borderRadius: 35, width: width / 2.5,
        position: 'relative',
        marginTop: 10
    },
    imgBox:
    {
        flex: 1,
        alignItems: 'center',
        marginTop: 30
    },
    img:
    {
        maxHeight: 160,
        maxWidth: 160,
        marginTop: 10
    },

})