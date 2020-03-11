import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';
import weatherMock from './weatherMock';
import images from '../../services/constans/images';

const WeatherBox = () => {
  const [currentTime, setCurrentTime] = useState(null);
  const [currentDate, setCurrentDate] = useState(null);

  const getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    setCurrentDate(date + '/' + month + '/' + year);
  };

  const getCurrentTime = () => {
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    setCurrentTime(hour + ':' + minutes);
  };

  useEffect(() => {
    setInterval(() => {
      getCurrentTime();
      getCurrentDate();
    });
  }, 1000);

  return (
    <View style={styles.cardView}>
      <View style={styles.containerOne}>
        <View style={styles.timeView}>
          <View style={styles.date}>
            <Text style={styles.dateText}>{currentDate}</Text>
          </View>
          <View style={styles.time}>
            <Text style={styles.timeText}>{currentTime}</Text>
          </View>
        </View>
        <View style={styles.degreView}>
          <Text style={styles.degreText}>{weatherMock.temp}</Text>
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.iconView}>
            <Image
              style={styles.icon}
              resizeMode={'center'}
              source={images.cloud}
            />
          </View>
          <View style={styles.iconTitleView}>
            <Text style={styles.iconTitle}>{weatherMock.weather}</Text>
          </View>
        </View>
      </View>
      <View style={styles.containerTwo}>
        <View style={styles.latiudeView}>
          <Text style={styles.texts}>
            {weatherMock.maxT} {weatherMock.minT}
          </Text>
        </View>
        <View style={styles.windView}>
          <Text style={styles.texts}>{weatherMock.wind}</Text>
        </View>
      </View>
    </View>
  );
};

export default WeatherBox;
