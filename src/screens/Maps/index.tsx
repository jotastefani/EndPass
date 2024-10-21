import React from 'react';
import { View, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import styles from './styles';

const Maps = () => {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.mapa}
        initialRegion={{
          latitude: -23.55052,
          longitude: -46.633308,
          latitudeDelta: 0.014,
          longitudeDelta: 0.014,
        }}
      >
        {/* Marcadores de eventos serão adicionados aqui */}
      </MapView>
    </View>
  );
};

export default Maps;
