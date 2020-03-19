import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import styles from './style';
import hasLocationPermission from './hasLocaltionPermission';
import { loadData, getLoc, GETLOCATION } from '../../redux/actions';
import { useDispatch } from 'react-redux';

const GetLocation = () => {
  const [latitude, setLatittude] = useState('');
  const [longitude, setLongitude] = useState('');
  const dispatch = useDispatch();


  const getLocation = async () => {
    const hasLocatPermis = await hasLocationPermission();
    if (!hasLocatPermis) return;
    dispatch({ type: GETLOCATION });
    Geolocation.getCurrentPosition(
      position => {
        setLatittude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        getLoc(position.coords.longitude, position.coords.latitude);
      },
      error => {
        console.log(error.code, error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      },
    );
  };

  const url =
    'https://openweathermap.org/data/2.5/weather?lat=' +
    { latitude } +
    '&lon=' +
    { longitude } +
    '&units=metric&appid=b6907d289e10d714a6e88b30761fae22'

  useEffect(() => {
    getLocation();
    dispatch(loadData());
  }, []);



  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <TouchableOpacity
          style={{ backgroundColor: 'red', width: 100, height: 100 }} onPress={() => console.log(url)}>
          <Text>Get Your Locations</Text>
        </TouchableOpacity>
        <Text>
          {latitude} {longitude}
        </Text>
      </View>
    </View>
  );
};

export default GetLocation;
