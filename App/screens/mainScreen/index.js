import React from 'react';
import {ScrollView} from 'react-native';
import {styles} from './style';
import WeatherBox from '../../components/weatherBox';
import WeatherChart from '../../components/weatherChart';
import WeatherDetails from '../../components/weatherDetails';
import WeatherChartWeekly from '../../components/weatherChartWeekly';
import BottomButtons from '../../components/bottomButtons';

const MainScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <WeatherBox />
      <WeatherChart navigation={navigation} />
      <WeatherChartWeekly navigation={navigation} />
      <WeatherDetails navigation={navigation} />
      <BottomButtons navigation={navigation} />
    </ScrollView>
  );
};

export default MainScreen;
