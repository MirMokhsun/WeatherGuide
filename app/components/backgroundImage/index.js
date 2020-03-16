import React from 'react';
import {ImageBackground} from 'react-native';
import constans from '../../services/constans/images';
import {styles} from './styles';

export default function BackgroundImage({background}) {
  if ((background = true))
    return (
      <ImageBackground
        source={constans.background2}
        style={styles.firstStyle}
      />
    );
  else {
    return <ImageBackground style={styles.secondStyle} />;
  }
}
