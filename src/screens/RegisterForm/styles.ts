import { StyleSheet } from "react-native"
import { THEME } from "../../theme"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',      
    backgroundColor: THEME.COLORS.BACKGROUND_900
  },
  btnNext: {
    alignItems: 'center',
    alignContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    width: 167,
    height: 52,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    hover: THEME.COLORS.BACKGROUND_800,
  },  
  input: {
    height: 20, 
    placeholder:"User",
    maxWidth: 300,
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row'   
  }
})