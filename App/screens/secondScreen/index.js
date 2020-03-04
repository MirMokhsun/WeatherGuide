import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { styles } from './style'
import iconsMaterialComunityIcons from '../../services/constans/icons/iconsMaterialComunityIcons'
import texts from '../../services/constans/texts'
import routs from '../../services/constans/routs'

const SecondPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.buttStl}>
                <TouchableOpacity style={styles.touchOpStl} onPress={() => navigation.navigate(routs.Locations)}>
                    {iconsMaterialComunityIcons.SecondPage}
                    <Text style={styles.txt}>{texts.ADD_LOC}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default SecondPage