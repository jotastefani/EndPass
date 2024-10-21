import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button } from 'react-native';
import {styles} from './styles';
import { THEME } from '../../theme';
import TabBar from '../../components/TabBar';

const Messeger = () => {
  const [mensagens, setMensagens] = useState([]);
  const [novaMensagem, setNovaMensagem] = useState('');
  const [eventoSelecionado, setEventoSelecionado] = useState(null);

  useEffect(() => {
    // Lógica para buscar mensagens do servidor
  }, []);

  const handleEnviarMensagem = () => {
    // Lógica para enviar mensagem para o servidor
  };

  return (
    <>
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Conversas</Text>
      </View>
      <FlatList
        data={mensagens}
        renderItem={({ item }) => (
          <View style={styles.mensagem}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.texto}>{item.mensagem}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.rodape}>
        <TextInput
          style={styles.input}
          value={novaMensagem}
          onChangeText={(text) => setNovaMensagem(text)}
          placeholder="Digite sua mensagem"
        />
        <Button title="Enviar" onPress={handleEnviarMensagem} />
      </View>
    </View>
    <View>
      <TabBar />
    </View>
    </>
  );
};

export default Messeger;

