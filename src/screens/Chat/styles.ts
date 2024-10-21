import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.BACKGROUND_900,
  },
  cabecalho: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.BACKGROUND_800,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: THEME.COLORS.TEXT,
  },
  mensagem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: THEME.COLORS.SHAPE,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: THEME.COLORS.TEXT,
  },
  texto: {
    fontSize: 16,
    color: THEME.COLORS.TEXT,
  },
  rodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: THEME.COLORS.SHAPE,
    borderRadius: 8,
    paddingHorizontal: 20,
  },
});
