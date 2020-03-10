import React, {useState} from 'react';
import {View} from 'react-native';
import SwitchButton from 'switch-button-react-native';

const Switcher = ({title1, title2}) => {
  const [activeSwitch, setActiveSwitch] = useState(1);

  return (
    <View style={{marginRight: 20}}>
      <SwitchButton
        onValueChange={() => setActiveSwitch(2)}
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
