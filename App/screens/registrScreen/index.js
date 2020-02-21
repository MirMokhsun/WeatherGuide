import React, { Component } from 'react';
import { View, Text } from 'react-native';
import colors from '../../services/constans/colors';

export default class RegistrScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ backgroundColor: colors.red, }}>
        <Text> registrScreen </Text>
      </View>
    );
  }
}
