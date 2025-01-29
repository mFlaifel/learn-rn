import { View, TouchableOpacity, Text, useColorScheme } from 'react-native';

import { styles } from './index.css';
import { useGlobalStyles } from '@/hooks/useGlobalStyles';
import { AppColors } from '@/constants/AppColors';

interface CustomTabFilterProps {
  filters: string[];
  setSelectedFilter: (filter: string) => void;
  selectedFilter: string;
  textStyle?: any;
}

export const CustomTabFilter = ({
  filters,
  setSelectedFilter,
  selectedFilter,
  textStyle,
}: CustomTabFilterProps) => {
  const { textMuted, borderRadius } = useGlobalStyles();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <View style={styles.filtersContainer}>
      {filters.map((filter) => (
        <TouchableOpacity
          key={filter}
          onPress={() => setSelectedFilter(filter)}
        >
          <Text
            style={[
              textMuted,
              styles.filter,
              borderRadius,
              {
                backgroundColor:
                  filter === selectedFilter ? AppColors.main : 'transparent',
                color:
                  filter === selectedFilter
                    ? AppColors.dark.text
                    : isDarkMode
                    ? AppColors.dark.textMuted
                    : AppColors.light.textMuted,
              },
              textStyle,
            ]}
          >
            {filter}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
