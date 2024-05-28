import React from "react";
import { TextInput, View } from "react-native";
import { styles } from "./styles";
import TabBar from "../../components/TabBar";

export function Explorer() {
  
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} />
      <TabBar/>
    </View>
  );
}
