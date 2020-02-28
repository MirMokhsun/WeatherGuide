import React  from 'react'
import { View,TouchableOpacity, Text } from 'react-native'
import { styles } from './style'
import colors from '../../services/constans/colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const SecondPage =({ navigation }) => {
        return (
            <View style={{ backgroundColor: colors.halfBlack, flex: 1, }}>
                <View style={styles.WB}>
                    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',}}>
                        <Icon name="plus" size={50} />
                        <Text style={styles.txt}>Press to add location</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
}
export default SecondPage