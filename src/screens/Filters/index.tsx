import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './styles';
import TabBar from '../../components/TabBar';

const Filters = () => {
  const [categoria, setCategoria] = useState('');
  const [distancia, setDistancia] = useState('');
  const [tipoEvento, setTipoEvento] = useState('');
  const [generoMusical, setGeneroMusical] = useState('');

  const handleFiltrar = () => {
    // Lógica de filtragem será adicionada aqui
  };

  return (
  <>
    <View style={styles.container}>
      <Text style={styles.text}>Filtre suas buscas</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Categoria"
          value={categoria}
          onChangeText={(text) => setCategoria(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Distância"
          value={distancia}
          onChangeText={(text) => setDistancia(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Tipo de Evento"
          value={tipoEvento}
          onChangeText={(text) => setTipoEvento(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Gênero Musical"
          value={generoMusical}
          onChangeText={(text) => setGeneroMusical(text)}
        />
      </View>
      <View style={styles.botao}>
        <Button title="Filtrar" onPress={handleFiltrar} />
      </View>
      
    </View>
    <View style={styles.tabBar}>
        <TabBar />
      </View>
    </>
  );
};

export default Filters;
