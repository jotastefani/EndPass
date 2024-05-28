import React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import TabBar from "../../components/TabBar";

export function Explorer() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Explore events near you</Text>
      </View>
      <View style={styles.container1}>
        <TabBar />
      </View>
    </View>
  );
}
