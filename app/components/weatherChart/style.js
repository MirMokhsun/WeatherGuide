import { StyleSheet } from 'react-native';
import colors from '../../services/constans/colors'

const styles = StyleSheet.create({
    cardViewTwo: {
        width: '100%',
        height: 280,
        borderRadius: 6,
        paddingTop: 5,
        paddingBottom: 5,
        marginBottom: 6,
        backgroundColor: colors.halfBlack,
    },
    viewOne: {
        flex: 0.1,
        paddingRight: 8,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    hours: {
        fontSize: 15,
        color: 'white',
    },
    viewTwo: {
        flex: 0.1,
    },
    box: {
        width: 50,
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxTwo: {
        width: 50,
        flex: 1,
        marginLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    timeCount: {
        fontSize: 15,
        color: 'white',
    },
    perText: {
        fontSize: 15,
        color: 'orange',
    },
    viewThree: {
        flex: 0.65,
        backgroundColor: 'yellow',
    },
    viewFour: {
        flex: 0.15,
        flexDirection: 'row',
        paddingBottom: 5,
    },
    row: {
        flex: 0.35,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
    },
    texts: {
        paddingLeft: 5,
        fontSize: 12,
        color: 'white',
    },
    rowThree: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    more: {
        fontSize: 15,
        paddingRight: 10,
        color: 'orange',
        textDecorationLine: 'underline'
    },
});

export default styles;
