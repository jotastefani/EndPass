import React, { useContext } from "react";
import { Image, View, Button, StyleSheet } from "react-native";
import AuthContext from "../contexts/auth";
import google_icon_G from "../../assets/google_icon-G-32.png"
import { styles } from "./styles";


const SignIn: React.FC = () => {
  const { signed, signIn } = useContext(AuthContext);

  console.log(signed);

  function handleSign() {
    signIn();
  }

  return (
    <View style={styles.container}>
      <Button title="Sign In with" 
      onPress={handleSign} 
      />
      <Image source={google_icon_G}
      style={styles.icon} 
      />
      
    </View>
  );
};

export default SignIn;