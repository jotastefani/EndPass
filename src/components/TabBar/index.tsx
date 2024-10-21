// Footer.tsx
import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";



const Footer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Explorer')}>
        <Image
          source={require("../../../assets/IconHome.png")}
          style={styles.icon} 
          />
                  
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Filters')}>
        <Image
          source={require("../../../assets/IconSearch.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('NewEvent')}>
        <Image
          source={require("../../../assets/IconPlus.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require("../../../assets/IconChat.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require("../../../assets/IconProfile.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
