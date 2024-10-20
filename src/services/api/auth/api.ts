import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

const styles = StyleSheet.create({
    Auth: {
      backgroundColor: '#4285F4',
      padding: 16,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      width: 250,
      height: 50,
      marginVertical: 20,
    },
    text: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export function signIn() {
    throw new Error("Function not implemented.");
}
