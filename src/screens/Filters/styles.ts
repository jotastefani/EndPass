import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND_900,
    padding: 20,
  },
  text: {
    fontSize: THEME.FONT_SIZE.LG,
    color: THEME.COLORS.TEXT,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    width: '100%',
    backgroundColor: THEME.COLORS.BACKGROUND_800,
    padding: 20,
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: THEME.COLORS.SHAPE,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,    
    color: THEME.COLORS.TEXT,
    backgroundColor: THEME.COLORS.SHAPE,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: THEME.COLORS.PRIMARY,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
  },
});

export default styles;
