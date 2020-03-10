import React from 'react';
import {Animated} from 'react-native';
import images from '../../services/constans/images';

export default function Loader() {
  const opacity = new Animated.Value(0);

  Animated.timing(opacity, {
    toValue: 1,
    duration: 2000,
  }).start();

  return (
    <Animated.Image
      style={[
        {
          justifyContent: 'center',
          alignItems: 'center',
          opacity: opacity,
          width: 250,
          height: 250,
          transform: [
            {
              scale: opacity.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1],
              }),
            },
          ],
        },
      ]}
      source={images.logo}
    />
  );
}
