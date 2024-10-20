import React from "react";
import { TextInput, View, Image, Text } from "react-native";
import { styles } from "./styles";
import logoSvg from "../../../assets/logoendpass.png";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

export function Login() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={logoSvg} style={styles.logo} />
      <Text> Faça seu login com o Google</Text>
      <View style={styles.row}>
        {/* Campo de entrada de e-mail */}
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#888"
          keyboardType="email-address"
        />

        {/* Campo de entrada de senha */}
        <TextInput
          style={[styles.input, styles.inputMargin]}
          placeholder="Senha"
          placeholderTextColor="#888"
          secureTextEntry
        />

        <Button
          title="Explorer"
          onClick={() => navigation.navigate('Explorer')}
          btnStyle={styles.btnLogin}
        />
      </View>
    </View>
  );
}
