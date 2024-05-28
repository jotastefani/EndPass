import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';


export const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'flex-start', 
    height: 203,
    backgroundColor: THEME.COLORS.BACKGROUND_900
  },
  container1: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'flex-end', 
    height: 203,
    
    backgroundColor: THEME.COLORS.BACKGROUND_900
  },

  logo: {
    width: 203,
    height: 208,
    marginTop: 74,
    marginBottom: 48,
  }, 
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    
  },  

  btnLogin: {
    alignItems: 'center',
    alignContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    width: 203,
    height: 52,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#F0F8FA',    
  },
  
  btnRegister: {
    alignItems: 'center',
    alignContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    width: 203,
    height: 52,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: THEME.COLORS.BACKGROUND_800,
    hover: THEME.COLORS.BACKGROUND_900,
  },
  row: {
    display: 'flex',    
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  
  }
});
  
  
  

