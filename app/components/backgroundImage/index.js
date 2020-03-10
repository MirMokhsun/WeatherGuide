import React from 'react';
import {ImageBackground} from 'react-native';
import colors from '../../services/constans/colors';

export default function BackgroundImage({background}) {
  if ((background = true))
    return (
      <ImageBackground
        source={require('./app/assets/images/Background2.jpg')}
        style={{width: '100%', height: '100%'}}
      />
    );
  else {
    return (
      <ImageBackground
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: colors.darkBlue,
        }}
      />
    );
  }
}
