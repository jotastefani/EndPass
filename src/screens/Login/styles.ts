import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'space-between',     
    backgroundColor: THEME.COLORS.BACKGROUND_900
  },
  logo: {
    width: 203,
    height: 208,
    marginTop: 74,
    marginBottom: 48,
  },
  input: {
    width: 203,
    height: 40,
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 8,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  inputMargin: {
    marginTop: 0,
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
  row: {
    display: 'flex',    
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    paddingBottom: 60,
  }
});