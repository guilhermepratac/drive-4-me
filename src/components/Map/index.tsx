import React, { useContext, useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MAPS_API_KEY } from 'react-native-dotenv';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { useDispatch, useSelector } from 'react-redux';
import * as Location from 'expo-location';
import tailwind from 'twrnc';
import { Icon } from 'react-native-elements';

import LocationContext from '../../context/Location/LocationContext';

import {
  selectDestination,
  selectOrigin,
  setOrigin,
  setTravelTimeInfo,
} from '../../redux/slices/navSlice';

function Map() {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef<MapView>(null);
  const location = useContext(LocationContext);
  const [adressOrigin, setAdressOrigin] = useState<string>("");

  const dispatch = useDispatch();
  console.log(MAPS_API_KEY)

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      dispatch(
        setOrigin({
          location: {
            lat: location.coords.latitude,
            lng: location.coords.longitude,
          },
        })
      );
    })();
  }, []);

  useEffect(() => {
    if (!origin || !destination) return;
    mapRef.current?.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination]);

  useEffect(() => {

    if (!origin || !destination) return;

    const getTravelTime = () => {

      const resp = fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${origin.location.lat} ${origin.location
      .lng}&destinations=${destination.description}&key=${MAPS_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setAdressOrigin(data['origin_addresses'][0])
          dispatch(setTravelTimeInfo(data.rows[0].elements[0]));
        })
    };

    getTravelTime();
  }, [origin, destination]);

  if (origin) {
    return (
      <View style={styles.containerMap}>
        <TouchableOpacity style={styles.floatinBtn}>
          <Icon
            name="arrow-left"
            type="feather"
            color="black"
            size={30}
            tvParallaxProperties={undefined}
          />
        </TouchableOpacity>
        <MapView
          ref={mapRef}
          style={styles.map}
          mapType="mutedStandard"
          initialRegion={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          }}
        >
          {origin && destination && (
            <MapViewDirections
              origin={adressOrigin}
              destination={destination.description}
              strokeColor="black"
              strokeWidth={3}
              apikey={MAPS_API_KEY}
            />
          )}

          {origin?.location && (
            <Marker
              title={origin.description}
              coordinate={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
              }}
              identifier="origin"
            />
          )}

          {destination?.location && (
            <Marker
              title={destination.description}
              coordinate={{
                latitude: destination.location.lat,
                longitude: destination.location.lng,
              }}
              identifier="destination"
            />
          )}
        </MapView>
      </View>
    );
  }

  return (  
    
    <View style={styles.container}>
      <Text style={styles.title}>Carregando...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  map: {
    height:"100%",
    width:"100%",
  },
  container: {
    flex: 1,
    padding: 24,
    marginTop: 72,
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderRadius: 6,
    color: "#20232a",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold"
  },
  containerMap: {
    flex: 2,
    height:"100%",
    width:"100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatinBtn: { 
    flex: 1,
    position: 'absolute',
    top: 60,
    left: 10,
  }
});

export default Map;
