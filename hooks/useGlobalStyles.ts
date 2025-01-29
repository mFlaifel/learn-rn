import { StyleSheet } from 'react-native';
import { AppColors } from '@/constants/AppColors';
import { useColorScheme } from 'react-native';

export const useGlobalStyles = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  console.log('isDarkMode', isDarkMode);

  return StyleSheet.create({
    borderRadius: { borderRadius: 8 },
    mainColor: {
      color: isDarkMode ? AppColors.dark.main : AppColors.light.main,
    },
    text: {
      color: isDarkMode ? AppColors.dark.text : AppColors.light.text,
    },
    textMuted: {
      color: isDarkMode ? AppColors.dark.textMuted : AppColors.light.textMuted,
    },
    background: {
      backgroundColor: isDarkMode
        ? AppColors.dark.background
        : AppColors.light.background,
    },
    // Add other global styles as needed
  });
};
