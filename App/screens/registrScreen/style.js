import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../services/constans/colors'

const width = Math.round(Dimensions.get('window').width);

export const styles = StyleSheet.create({
    keyView:
        { flex: 1, backgroundColor: colors.halfBlack },
    scView:
        { alignItems: 'center', justifyContent: 'center' },
    container:
        { flex: 1, backgroundColor: colors.halfBlack, alignItems: 'center', justifyContent: 'center' },
    InputsView:
        { flex: 1, position: 'relative' },
    VB1:
        { flex: 0.2, marginTop: 10 },
    VB2:
        { flex: 0.2, marginTop: 15 },
    txtInView:
        { flexDirection: 'row', borderColor: 'gray', borderWidth: 2, borderRadius: 25, height: 60, width: width / 1.5, },
    txtIn:
        { height: 60, width: "100%", fontSize: 16, paddingLeft: 50, },
    txt:
        { marginTop: 5, fontSize: 30, fontFamily: 'Roboto-Black', },
    txtBut:
        { fontSize: 14, fontFamily: 'Roboto-Bold', color: colors.emerald },
    logBut:
        { width: "30%", height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.halfBlack, borderRadius: 35, width: width / 2.5, position: 'relative', marginTop: 10 },
    imgBox:
        { flex: 1, alignItems: 'center', marginTop: 30 },
    img:
        { maxHeight: 160, maxWidth: 160, marginTop: 10 },
    txtIcon:
        { width: 60, height: '100%', position: 'absolute', justifyContent: 'center', alignItems: 'center' },
    btnBox:
        { marginTop: "2%", flex: 0.4 },
})