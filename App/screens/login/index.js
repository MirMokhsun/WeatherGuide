import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import colors from '../../services/constans/colors'

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ backgroundColor: colors.emerald }}>
        <Text> loginScreen </Text>
        <Button onPress={() => { this.props.navigation.navigate('RegistrScreen')}} />
      </View>
    );
  }
}
