import { StyleSheet } from 'react-native';
import { THEME } from '../theme';
export const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    end: 'auto',
             
    backgroundColor: THEME.COLORS.BACKGROUND_900
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },  
  icon : {
    display: 'flex',
  }
});
  
  
  

