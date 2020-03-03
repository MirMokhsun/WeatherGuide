import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { styles } from './style'
import texts from '../../services/constans/texts'
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../services/constans/colors'
import items from '../../components/drawer'

const DrawerContent = ({ navigation }) => {
    return (
        <View style={styles.drawerContent}>
            <View style={styles.container}>
                <Text style={styles.txtSett} >{texts.SETTINGS}</Text>
                {
                    items.map(({ onPress, iconName, title }) => {
                        return (
                            <TouchableOpacity style={styles.touch} onPress={(onPress ? () => onPress(navigation) : null)}>
                                <Icon name={iconName} size={25} color={colors.emerald} />
                                <Text style={styles.txt}>{title}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </View >
    )
}

export default DrawerContent