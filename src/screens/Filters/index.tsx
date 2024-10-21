import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './styles';

const Filters = () => {
  const [categoria, setCategoria] = useState('');
  const [distancia, setDistancia] = useState('');

  const handleFiltrar = () => {
    // Lógica de filtragem será adicionada aqui
  };

  return (
    <View style={styles.container}>
      <Text>Filtros</Text>
      <TextInput
        placeholder="Categoria"
        value={categoria}
        onChangeText={(text) => setCategoria(text)}
      />
      <TextInput
        placeholder="Distância"
        value={distancia}
        onChangeText={(text) => setDistancia(text)}
      />
      <Button title="Filtrar" onPress={handleFiltrar} />
    </View>
  );
};

export default Filters;
