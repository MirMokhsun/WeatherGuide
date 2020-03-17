import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import styles from './style';
import hasLocationPermission from './hasLocaltionPermission';
import {connect} from 'react-redux';
import {getLoc, loadLoc} from '../../redux/actions';
import {useDispatch} from 'react-redux';

const GetLocation = ({getLoc}) => {
  const [latitude, setLatittude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const onClick = () => dispatch(loadLoc());

  const getLocation = async () => {
    const hasLocatPermis = await hasLocationPermission();
    if (!hasLocatPermis) return;
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

  const getData = (latitude, longitude) => {
    const url =
      'https://openweathermap.org/data/2.5/weather?lat=' +
      latitude +
      '&lon=' +
      longitude +
      '&units=metric&appid=b6907d289e10d714a6e88b30761fae22';
    fetch(url)
      .then(response => response.json())
      .then(responseJson => setData(responseJson));
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (longitude && latitude) {
      getData(latitude, longitude);
      console.log(longitude, 'Longitude and Latitude', latitude);
    }
  }, [longitude, latitude]);
  return !data ? (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Text style={{paddingTop: 50, color: 'red', backgroundColor: 'yellow'}}>
        askdjaksjdnZ>dmalksdzxm
      </Text>
    </View>
  ) : (
    <View style={styles.container}>
      <View style={styles.result}>
        <TouchableOpacity
          style={{backgroundColor: 'red', width: 100, height: 100}}
          onPress={onClick}>
          <Text>Get Your Locations</Text>
        </TouchableOpacity>
        <Text>
          {latitude} {longitude}
        </Text>
      </View>
    </View>
  );
};

const mapDispatchToProps = {
  getLoc,
};

export default connect(null, mapDispatchToProps)(GetLocation);
