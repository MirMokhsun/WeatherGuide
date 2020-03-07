import { StyleSheet } from 'react-native';
import colors from '../../services/constans/colors';

const styles = StyleSheet.create({
    cardView: {
        width: '100%',
        height: 200,
        borderRadius: 6,
        paddingBottom: 5,
        marginBottom: 6,
        backgroundColor: colors.halfBlack,
    },
    containerOne: {
        flex: 0.8,
        flexDirection: 'row',
    },
    timeView: {
        flex: 0.4,
    },
    date: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    dateText: {
        fontSize: 18,
        color: 'white',
    },
    time: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    timeText: {
        fontSize: 40,
        color: 'white',
    },
    degreView: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    degreText: {
        fontSize: 70,
        color: 'white',
    },
    iconContainer: {
        flex: 0.2,
    },
    iconView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    icon: {
        width: '80%',
        height: '80%',
    },
    iconTitleView: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    iconTitle: {
        fontSize: 15,
        color: 'white',
    },
    containerTwo: {
        flex: 0.2,
    },
    latiudeView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    windView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texts: {
        fontSize: 18,
        color: 'white',
    },

});

export default styles;
