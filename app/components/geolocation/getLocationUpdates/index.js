import Geolocation from 'react-native-geolocation-service';

const GetLocationUpdates = async () => {
  const hasLocationPermission = await this.hasLocationPermission();

  if (!hasLocationPermission) return;

  this.setState({updatesEnabled: true}, () => {
    this.watchId = Geolocation.watchPosition(
      position => {
        this.setState({location: position});
        console.log(position);
      },
      error => {
        this.setState({location: error});
        console.log(error);
      },
      {
        enableHighAccuracy: true,
        distanceFilter: 0,
        interval: 5000,
        fastestInterval: 2000,
      },
    );
  });
};

export default GetLocationUpdates;
