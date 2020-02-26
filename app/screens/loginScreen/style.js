import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../services/constans/colors'

const width = Math.round(Dimensions.get('window').width);

export const styles = StyleSheet.create({
    container:
        { flex: 1, backgroundColor: colors.halfBlack, alignItems: 'center', justifyContent: 'center' },
    InputsView:
        { flex: 1, position: 'relative', marginTop: "5%" },
    VB1:
        { flex: 0.2 },
    VB2:
        { flex: 0.2, marginTop: "10%" },
    txtInView:
        { flexDirection: 'row', borderColor: 'gray', borderWidth: 2, borderRadius: 25, height: 60, width: width / 1.5, },
    txtIn:
        { height: 60, width: "100%", fontSize: 16, paddingLeft: 50 },
    btnBox:
        { flex: 1, marginTop: "5%", alignItems: 'center', justifyContent: 'center', },
    regBut:
        { width: "30%", height: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.halfWhite, borderRadius: 35, width: width / 2.5, position: 'relative', },
    appBut:
        { width: "30%", height: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.halfBlack, borderRadius: 35, width: width / 2.5, marginTop: 16, position: 'relative', },
    txt:
        { marginTop: 5, fontSize: 30, fontFamily: 'Roboto-Black', },
    txtBut:
        { fontSize: 14, fontFamily: 'Roboto-Bold', color: colors.emerald },
})