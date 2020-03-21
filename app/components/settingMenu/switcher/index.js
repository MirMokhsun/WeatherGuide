import React, { useState } from 'react';
import { View } from 'react-native';
import SwitchButton from 'switch-button-react-native';
import { useDispatch } from 'react-redux';

const Switcher = ({ title1, title2 }) => {
  const dispath = useDispatch()
  const changeBack = () => {
    if (background === true) {
      console.log('Background is off')
      dispath(BACKGROUND_OFF)
    }
    else {
      console.log('Background is on')
      dispath(BACKGROUND_ON)
    }
  }
  return (
    <View style={{ marginRight: 20 }}>
      <SwitchButton
        onValueChange={() => changeBack()}
        text1={title1}
        text2={title2}
        switchWidth={70}
        switchHeight={30}
        fontColor="#fff"
      />
    </View>
  );
};

export default Switcher;
