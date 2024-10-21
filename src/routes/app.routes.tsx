import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { RegisterForm } from "../screens/RegisterForm";
import { Explorer } from "../screens/Explorer";
import AuthRoutes from "./auth.routes";
import EventsDetail from "../screens/EventsDetails";
import Filters from "../screens/Filters";
import Maps from "../screens/Maps";
import NewEvent from "../screens/NewEvent";
import Messeger from "../screens/Chat";
import Perfil from "../screens/Perfil";



export const Stack = createStackNavigator();
export function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="RegisterForm" component={RegisterForm} />
      <Stack.Screen name="Explorer" component={Explorer} />
      <Stack.Screen name="Auth" component={AuthRoutes} />
      <Stack.Screen name="EventDetails" component={EventsDetail} />
      <Stack.Screen name="Filters" component={Filters} />
      <Stack.Screen name="Maps" component={Maps} />
      <Stack.Screen name="NewEvent" component={NewEvent} />
      <Stack.Screen name="Messeger" component={Messeger} />
      <Stack.Screen name="Perfil" component={Perfil} />
      
    </Stack.Navigator>
  );
}
