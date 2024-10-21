import React from "react";
import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import TabBar from "../../components/TabBar";
import Maps from "../Maps";

const explorer: React.FC = () => <View />;


export function Explorer() {
  return (
    <View style={styles.container}>
      
      <View style={styles.map}>
        <Text style={styles.text}>Explore events near you</Text>
        <Maps/>
      </View>
      <View style={styles.container1}>
        <TabBar style={styles.tabBar} />
      </View>
    </View>
  );
}
