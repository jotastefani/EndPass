import React from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";
import logoSvg from '../../../assets/logoendpass.png';
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

export function Home() {
   const navigation = useNavigation();

   return (
      <View style={styles.container}>
         <Image
            source={logoSvg}
            style={styles.logo}
         />
         <View style={styles.row}>
            <Button
               title="Login"
               onClick={() => navigation.navigate('Login')}
               btnStyle={styles.btnLogin}
            />
            <Button
               title="Register"
               onClick={() => navigation.navigate('Register')}
               btnStyle={styles.btnRegister}
            />
         </View>
      </View>
   );
}




