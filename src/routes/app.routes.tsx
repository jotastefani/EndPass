import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { RegisterForm } from "../screens/RegisterForm";
import { Explorer } from "../screens/Explorer";

export const Stack = createStackNavigator();
export function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="RegisterForm" component={RegisterForm} />
      <Stack.Screen name="Explorer" component={Explorer} />
    </Stack.Navigator>
  );
}
