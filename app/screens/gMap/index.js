import React, { useState } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import styles from './style'

var myLatLng = { lat: 40.3885775, lng: 49.8706103 };

const MapMe = () => {

    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={{
                latitude: 40.378420,
                longitude: 49.842200,
                latitudeDelta: 10.5,
                longitudeDelta: 10.5,
            }}

        >
            <MapView.Marker
                coordinate=
                {{
                    latitude: 40.3885775,
                    longitude: 49.8706103,

                }}
                title={"Тема я тут))"}
                description={"Name of our place"}
            />
            {/* <Marker
                draggable
                    coordinate={}
                    title={"Тема я тут))"}
                    description={"Name of pur place"}
                /> */}
        </MapView>
    );

}
export default MapMe