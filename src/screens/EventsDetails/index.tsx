import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import TabBar from '../../components/TabBar';


const EventsDetail = () => {
  return (
    <>
    <View style={styles.container}>
      <Text>Detalhes do Evento</Text>
      {/* Informações do evento serão adicionadas aqui */}
    </View>
    <View>
    <TabBar />
  </View>
  </>
  );
};

export default EventsDetail;
