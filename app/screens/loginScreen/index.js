import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput, KeyboardAvoidingView } from 'react-native';
import colors from '../../services/constans/colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from './style';
import images from '../../services/constans/images'

var footerY; //Y position of the dummy view
export default class LoginScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset="-250" enabled>
        <View style={styles.container}>
          <ScrollView style={{ flex: 1 }}
            ref='_scrollView'>
            <View style={{ flex: 1, alignItems: 'center', }}>
              <Image
                source={images.logo}
                style={{ maxHeight: 180, maxWidth: 180, marginTop: 10, }} />
              <Text style={styles.txt}>Weather Guide</Text>
            </View>
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
            <View style={styles.btnBox}>
              <View style={styles.regBut}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('RegistrScreen') }}>
                  <Text >Go To Registration</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.appBut}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('App') }}>
                  <Text>Go To Appflow</Text>
                </TouchableOpacity >
              </View>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView >
    );
  }
}

