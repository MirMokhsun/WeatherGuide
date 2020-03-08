import { StyleSheet, Dimensions } from 'react-native'

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export const styles = StyleSheet.create({
    keyView:
    {
        backgroundColor: 'red',
        width: screenWidth,
        height: screenHeight,
    },
    container:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    img:
    {
        width: screenWidth,
        height: screenHeight,
    }
})