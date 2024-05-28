import { StyleSheet } from "react-native"
import { THEME } from "../../theme"
import { text } from "body-parser";

export const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    paddingTop: 100,
    alignItems: 'center'

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
    width: 203,

  },
  errorText: {
    fontSize: 12,
    color: 'red',
    marginBottom: 10,
  },
  btnSubmit: {
    alignItems: 'center',
    alignContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    width: 203,
    height: 52,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#F0F8FA',
    fontSize: 16
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  }

});
