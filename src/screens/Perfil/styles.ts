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
  dados: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    color: THEME.COLORS.CAPTION_500,
  },
  valor: {
    fontSize: 16,
    color: THEME.COLORS.TEXT,
  },
  configuracoes: {
    padding: 20,
  },
  sobre: {
    padding: 20,
  },
  suporte: {
    padding: 20,
  },
  texto: {
    fontSize: 16,
    color: THEME.COLORS.TEXT,
  },
});
