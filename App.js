import React from 'react'
import Navigation from './app/navigation/navigation'
import { ImageBackground, StatusBar, Dimensions } from 'react-native'
import colors from './app/services/constans/colors'
export const height = Math.round(Dimensions.get('window').height);


const App = () => {
  return (
    <ImageBackground source={require('./app/assets/images/Background2.jpg')} style={{ width: '100%', height: '100%', backgroundColor: colors.darkBlue }}>
      <StatusBar backgroundColor={colors.gray} barStyle="light-content" />
      <Navigation />
    </ImageBackground>
  )
}


export default App