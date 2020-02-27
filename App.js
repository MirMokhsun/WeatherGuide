import React, { Component } from 'react'
import Navigation from './app/navigation/navigation'
import { strings } from './app/i18n/i18n'


// export default function App() {

// import React, { Component } from 'react';
// import { View, Text } from 'react-native';

export default class App extends Component {

  render() {
    return (
      <Navigation screenProps={{localText: strings}}/>
    )
  }
}

