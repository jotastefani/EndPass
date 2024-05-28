import { StyleSheet } from "react-native"
import { THEME } from "../../theme"

export const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,             
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    paddingTop: 250,
    
  },
  input: {
    height: 40,    
    borderWidth: 2,
    marginBottom: 20,
    paddingLeft: 10,
    color: 'white',    
    borderColor: '#888',
    borderRadius: 8,
    paddingHorizontal: 10,  
    
    
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    marginBottom: 10,
  },
});
