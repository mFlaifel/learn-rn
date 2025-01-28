import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from 'react-native';

export const useGlobalStyles = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  console.log('isDarkMode', isDarkMode);

  return StyleSheet.create({
    borderRadius: { borderRadius: 8 },
    mainColor: {
      color: isDarkMode ? Colors.dark.main : Colors.light.main,
    },
    text: {
      color: isDarkMode ? Colors.dark.text : Colors.light.text,
    },
    textMuted: {
      color: isDarkMode ? Colors.dark.textMuted : Colors.light.textMuted,
    },
    background: {
      backgroundColor: isDarkMode
        ? Colors.dark.background
        : Colors.light.background,
    },
    // Add other global styles as needed
  });
};
