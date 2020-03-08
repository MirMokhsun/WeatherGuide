import { StyleSheet, Dimensions } from 'react-native'

const Height = Math.round(Dimensions.get('window').height);

export const styles = StyleSheet.create({
    keyView:
    {
        flex: 1,
        backgroundColor: 'transparent'
    },
    scView:
    {
        alignItems: 'center',
        justifyContent: 'center'
    },
    container:
    {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    img:
    {
        height: Height
    }
})