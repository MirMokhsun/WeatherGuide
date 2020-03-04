import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import iconsMaterialComunityIcons from '../../services/constans/icons/iconsMaterialComunityIcons';
import Icon from 'react-native-vector-icons/Entypo';
import SwitchButton from 'switch-button-react-native';
import routs from '../../services/constans/routs';

const Locations = ({ navigation }) => {
    const [activeSwitch, setActiveSwitch] = useState(1)
    return (
        <View style={{ backgroundColor: '#0E374D', flex: 1, }}>
            <TouchableOpacity style={{ backgroundColor: '#0E374D', width: '100%', flexDirection: 'row', alignItems: 'center' }} onPress={() => navigation.navigate(routs.LocationFind)} >
                {iconsMaterialComunityIcons.Locations}
                <Text style={{ fontSize: 20, paddingLeft: 5, color: 'white', fontFamily: 'Roboto-Black' }}>Add Locations</Text>
            </TouchableOpacity>
            <View style={{ backgroundColor: '#273840', width: '100%', flexDirection: 'row', alignItems: 'center', height: "10%" }}>
                <Text style={{ fontSize: 20, paddingLeft: 20, color: 'white', fontFamily: 'Roboto-Black' }}>Your Location</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: 5 }}>
                <Icon name='location-pin' size={30} color={'white'} />
                <Text style={{ fontSize: 20, paddingLeft: 20, color: 'white', fontFamily: 'Roboto-Black', position: 'absolute', paddingLeft: 25 }}> Automatic locate</Text>
                <SwitchButton onValueChange={() => setActiveSwitch(2)}
                    text1=''
                    text2=''
                    switchWidth={70}
                    switchHeight={30}
                    switchdirection='rtl'
                    switchSpeedChange={350}
                    switchBorderColor='#01689F'
                    switchBackgroundColor='#01689F'
                    btnBorderColor='#F7FFFC'
                    btnBackgroundColor='#F7FFFC'
                    fontColor='#fff'
                    activeFontColor='#048DDD'
                />
            </View>
        </View >
    );

}
export default Locations