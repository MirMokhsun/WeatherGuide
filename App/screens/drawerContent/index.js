import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './style';
import texts from '../../services/constans/texts';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../services/constans/colors';
import items from '../../components/drawer';
import SwitchButton from 'switch-button-react-native';

const DrawerContent = ({ navigation }) => {
  return (
    <View style={styles.drawerContent}>
      <View style={styles.header}>
        <Text style={styles.txtSett}>{texts.SETTINGS}</Text>
      </View>
      <View style={styles.container}>
        {items.map(({ onPress, iconName, title, num }) => {
          return (
            <TouchableOpacity
              style={styles.touch}
              onPress={onPress ? () => onPress(navigation) : null}>
              <Text style={styles.txt}>{title}</Text>
              {
                num ?
                  <SwitchButton></SwitchButton> :
                  <Icon name={iconName} size={25} color={colors.emerald} />
              }
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default DrawerContent;
