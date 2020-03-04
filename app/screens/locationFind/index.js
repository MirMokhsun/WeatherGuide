import React, { useState } from 'react';
import { View, TextInput, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon1 from 'react-native-vector-icons/Ionicons';
import routs from '../../services/constans/routs';


const LocationFind = ({ navigation }) => {
    const [activeSwitch, setActiveSwitch] = useState(1)
    return (
        <KeyboardAvoidingView style={{ backgroundColor: '#0E374D', height: '100%', alignItems: 'center', paddingTop: 20 }} behavior="height" keyboardVerticalOffset="0" >
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ borderWidth: 1, borderColor: 'white', width: '80%', flexDirection: 'row', alignItems: 'center', }}>
                <Icon name='magnifier' size={25} color='white' style={{ paddingLeft: 5 }} />
                <TextInput
                    style={{ fontSize: 20, paddingLeft: 20, color: 'white', fontFamily: 'Roboto-Black', width: '100%' }}
                    placeholder='Find Location'
                    placeholderTextColor='white' />
                <TouchableOpacity onPress={() => navigation.navigate(routs.Locations)}>
                    <Icon1 name='ios-return-left' size={25} color='white' style={{ paddingRight: 10 }} />
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );

}
export default LocationFind