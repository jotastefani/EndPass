import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { THEME } from "../../theme";
import styles from "./styles";
import TabBar from "../../components/TabBar";

const NewEvent: React.FC = () => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");

  const handleCriarEvento = () => {
    // Lógica para criar o evento
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titulo}>Criar Evento</Text>
        <View style={styles.form}>
          <Text style={styles.label}>Título</Text>
          <TextInput
            style={styles.input}
            value={titulo}
            onChangeText={(text) => setTitulo(text)}
            placeholder="Insira o título do evento"
          />
          <Text style={styles.label}>Descrição</Text>
          <TextInput
            style={styles.input}
            value={descricao}
            onChangeText={(text) => setDescricao(text)}
            placeholder="Insira a descrição do evento"
          />
          <Text style={styles.label}>Data e Hora</Text>
          <View style={styles.dataHora}>
            <TextInput
              style={styles.inputData}
              value={data}
              onChangeText={(text) => setData(text)}
              placeholder="Insira a data"
            />
            <TextInput
              style={styles.inputHora}
              value={hora}
              onChangeText={(text) => setHora(text)}
              placeholder="Insira a hora"
            />
          </View>
          <TextInput
            style={styles.inputHora}
            value={hora}
            onChangeText={(text) => setHora(text)}
            placeholder="Local"
          />
          <TouchableOpacity style={styles.botao} onPress={handleCriarEvento}>
            <Text style={styles.botaoTexto}>Criar Evento</Text>
          </TouchableOpacity>
        </View>
      </View>
     <View  style={styles.tabBar}>
      <TabBar />
    </View>
    </>
  );
};

export default NewEvent;
