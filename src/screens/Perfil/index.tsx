import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { styles } from "./styles";
import { THEME } from "../../theme";
import TabBar from "../../components/TabBar";

const Perfil = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.cabecalho}>
          <Text style={styles.titulo}>Perfil</Text>
        </View>
        <View style={styles.dados}>
          <Text style={styles.label}>Nome:</Text>
          <Text style={styles.valor}>João Silva</Text>
          <Text style={styles.label}>E-mail:</Text>
          <Text style={styles.valor}>joao.silva@example.com</Text>
          <Text style={styles.label}>Telefone:</Text>
          <Text style={styles.valor}>(11) 12345-6789</Text>
        </View>
        <View style={styles.configuracoes}>
          <Button title="Editar Perfil" />
          <Button title="Alterar Senha" />
          <Button title="Sair" />
        </View>
        <View style={styles.sobre}>
          <Text style={styles.titulo}>Sobre</Text>
          <Text style={styles.texto}>Esta é uma aplicação de eventos.</Text>
        </View>
        <View style={styles.suporte}>
          <Text style={styles.titulo}>Suporte</Text>
          <Text style={styles.texto}>Contate-nos em suporte@example.com</Text>
        </View>
      </View>
      <View>
        <TabBar />
      </View>
    </>
  );
};

export default Perfil;
