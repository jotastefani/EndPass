import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';

export const Stack = createStackNavigator();
export function Routes() {
  return  (
  
  <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />  
        
  </Stack.Navigator>

  )
}