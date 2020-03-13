import Geolocation from 'react-native-geolocation-service';

const RemoveLocationUpdates = () => {
  if (this.watchId !== null) {
    Geolocation.clearWatch(this.watchId);
    this.setState({updatesEnabled: false});
  }
};

export default RemoveLocationUpdates;
