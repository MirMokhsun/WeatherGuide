import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../services/constans/colors'

const width = Math.round(Dimensions.get('window').width);

export const styles = StyleSheet.create({
    container:
        { flex: 1, backgroundColor: colors.pBlue, alignItems: 'center', },
    InputsView:
        { flex: 0.5, position: 'relative',  marginTop: "10%" },
    VB1:
        { flex: 0.3},
    VB2:
        { flex: 0.3, marginTop: "20%"},
    txtInView:
        { flexDirection: 'row', borderColor: 'gray', borderWidth: 2, borderRadius: 25, height: 60, width: width / 1.5, },
    txtIn:
        { height: 60, width: "100%", fontSize: 16, paddingLeft: 50 },
    logBut:
        { height: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.halfBlack, borderRadius: 35, width: width / 2.5, marginTop: "10%", position: 'relative',},
    txt:
        { marginBottom: 5, fontSize: 20, fontFamily: 'OdibeeSans-Regular', marginBottom: "4%" },
})