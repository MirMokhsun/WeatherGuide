import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, Dimensions, TextInput, KeyboardAvoidingView } from 'react-native';
import colors from '../../services/constans/colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './style';


const width = Math.round(Dimensions.get('window').width);

export default class RegistrScreen extends Component {

  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding"  keyboardVerticalOffset="-250" enabled>
        <View style={{ flex: 1, backgroundColor: colors.pBlue, justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.InputsView}>
            <View style={styles.VB1}>
              <View style={styles.txtInView}>
                <TextInput
                  placeholder="Enter your email"
                  style={styles.txtIn} />
                <View style={{ width: 60, height: '100%', position: 'absolute', justifyContent: 'center', alignItems: 'center', }}>
                  <Icon name="login" size={25} color={colors.emerald} />
                </View>
              </View>
            </View>
            <View style={styles.VB2}>
              <View style={styles.txtInView}>
                <View style={{ width: '100%', }}>
                  <TextInput
                    placeholder="Enter your password"
                    style={styles.txtIn} />
                </View>
                <View style={{ width: 60, height: '100%', position: 'absolute', justifyContent: 'center', alignItems: 'center', }}>
                  <Icon name="textbox-password" size={25} color={colors.emerald} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.logBut}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('LoginScreen') }}>
              <Text>Go To Login Page</Text>
            </TouchableOpacity >
          </View>
        </View>
      </KeyboardAvoidingView >
    );
  }
}

