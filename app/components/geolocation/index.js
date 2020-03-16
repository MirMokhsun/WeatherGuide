import React, {useState, useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import styles from './style';
import hasLocationPermission from './hasLocaltionPermission';

const GetLocation = () => {
  const [latitude, setLatittude] = useState();
  const [longitude, setLongitude] = useState();
  const [data, setData] = useState({});

  const getLocation = async () => {
    const hasLocatPermis = await hasLocationPermission();
    if (!hasLocatPermis) return;
    Geolocation.getCurrentPosition(
      position => {
        setLatittude(position.coords.latitude);
        setLongitude(position.coords.longitude);
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

  const getData = () => {
    fetch(
      'https://openweathermap.org/data/2.5/weather?lat=' +
        {longitude} +
        '&lon=' +
        {latitude} +
        '&units=metric&appid=b6907d289e10d714a6e88b30761fae22',
    )
      .then(response => response.json())
      .then(
        responseJson => setData(responseJson),
        console.log('/////////////////////////////', data),
      );
  };

  useEffect(() => {
    getLocation();
    getData();
  }, []);

  return !data ? (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Text style={{paddingTop: 50, color: 'red', backgroundColor: 'yellow'}}>
        askdjaksjdnZ>dmalksdzxm
      </Text>
    </View>
  ) : (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text>
          {latitude} {longitude}
        </Text>
      </View>
    </View>
  );
};

export default GetLocation;
