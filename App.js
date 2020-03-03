import React, { Component } from 'react'
import { strings } from './app/i18n/i18n'
import Mapa from './app/navigation/navigation'

// export default function App() {

// import React, { Component } from 'react';
// import { View, Text } from 'react-native';

export default class App extends Component {

  render() {
    return (
      <Mapa />
      // <Navigation screenProps={{localText: strings}}/>
    )
  }
}

