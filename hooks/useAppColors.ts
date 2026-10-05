import { useColorScheme } from 'react-native';
import { Preferences } from '../types/wishlist';
import { palette } from '../theme/colors';

export function useAppColors(appearance: Preferences['appearance']) {
  const deviceScheme = useColorScheme();
  return appearance === 'Dark' || (appearance === 'System' && deviceScheme === 'dark') ? palette.dark : palette.light;
}
