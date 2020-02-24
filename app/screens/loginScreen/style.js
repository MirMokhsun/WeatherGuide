import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../services/constans/colors'

const width = Math.round(Dimensions.get('window').width);

export const styles = StyleSheet.create({
    container:
        { flex: 1, backgroundColor: colors.pBlue, alignItems: 'center', justifyContent: 'center' },
    InputsView:
        { flex: 0.5, position: 'relative', marginTop: "5%" },
    VB1:
        { flex: 0.3 },
    VB2:
        { flex: 0.3, marginTop: "10%" },
    txtInView:
        { flexDirection: 'row', borderColor: 'gray', borderWidth: 2, borderRadius: 25, height: 60, width: width / 1.5, },
    txtIn:
        { height: 60, width: "100%", fontSize: 16, paddingLeft: 50 },
    btnBox:
        { flex: 1, marginTop: "5%", alignItems: 'center', justifyContent: 'center', },
    regBut:
        { width: "40%", height: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.halfWhite, borderRadius: 35, width: width / 2.5,  position: 'relative', },
    appBut:
        { width: "40%", height: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.halfBlack, borderRadius: 35, width: width / 2.5, marginTop: 10, position: 'relative', },
    txt:
        { marginBottom: 5, fontSize: 30, fontFamily: 'OdibeeSans-Regular', },
})