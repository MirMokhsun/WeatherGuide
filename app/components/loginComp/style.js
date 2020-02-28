import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../services/constans/colors'

const width = Math.round(Dimensions.get('window').width);

export const styles = StyleSheet.create({

    txtInView:
        { flexDirection: 'row', borderColor: 'gray', borderWidth: 2, borderRadius: 25, height: 60, width: width / 1.5, },
    txtIn:
        { height: 60, width: "100%", fontSize: 16, paddingLeft: 50 },
    btnBox:
        { flex: 1, marginTop: "20%", alignItems: 'center', justifyContent: 'center', },
    txtBut:
        { fontSize: 14, fontFamily: 'Roboto-Bold', color: colors.emerald },
    icon:
        { width: 60, height: '100%', position: 'absolute', justifyContent: 'center', alignItems: 'center', },
    image:
        { maxHeight: 145, maxWidth: 145, marginTop: 10 },

})