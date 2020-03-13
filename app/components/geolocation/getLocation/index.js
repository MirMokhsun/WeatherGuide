import Geolocation from 'react-native-geolocation-service';

const GetLocation = async () => {
  const hasLocationPermission = await this.hasLocationPermission();

  if (!hasLocationPermission) return;

  this.setState({loading: true}, () => {
    Geolocation.getCurrentPosition(
      position => {
        this.setState({location: position, loading: false});
        console.log(position);
      },
      error => {
        this.setState({location: error, loading: false});
        console.log(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 50,
        forceRequestLocation: true,
      },
    );
  });
};

export default GetLocation;
