import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { styles } from './style'

const MapScreen = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity />
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={{
                    latitude: 40.378420,
                    longitude: 49.842200,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
            </MapView>
        </View>
    )
}

export default MapScreen