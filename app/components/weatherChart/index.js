import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {times} from './timeCounts';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import CharKit from './charKit';
import routs from '../../services/constans/routs';
import texts from '../../services/constans/texts';
import TextVies from '../../../__mocks__/bottomTV';

const WeatherChart = ({navigation}) => {
  return (
    <View style={styles.cardViewTwo}>
      <View style={styles.viewOne}>
        <Text style={styles.hours}>{texts.HEAD_RIGHT}</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.viewTwo}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}>
            {times.map(({time, iconName, iconNameSmall, degree}) => {
              return (
                <View>
                  <View style={styles.box}>
                    <Text style={styles.timeCount}>{time}</Text>
                  </View>
                  <View style={styles.box}>
                    <Icon name={iconName} size={30} color={'white'} />
                  </View>
                  <View style={styles.boxTwo}>
                    <Icon name={iconNameSmall} size={16} color={'white'} />
                    <Text style={styles.perText}>0%</Text>
                  </View>
                  <View style={styles.boxTwo}>
                    <Text style={styles.tempText}>{degree}°</Text>
                  </View>
                </View>
              );
            })}
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
            }}>
            <CharKit />
          </View>
        </View>
      </ScrollView>
      <View style={styles.viewFour}>
        {TextVies.map(({text, iconName}) => {
          return (
            <View style={styles.row}>
              <Icon1 name={iconName} size={20} color={'white'} />
              <Text style={styles.texts}>{text}</Text>
            </View>
          );
        })}
        <TouchableOpacity
          style={styles.rowThree}
          onPress={() => navigation.navigate(routs.DetailsScreen)}>
          <Text style={styles.more}>{texts.DETAILS}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WeatherChart;
