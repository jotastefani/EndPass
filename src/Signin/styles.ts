import { StyleSheet } from 'react-native';
import { THEME } from '../theme';
export const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    

             
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
  
  
  

