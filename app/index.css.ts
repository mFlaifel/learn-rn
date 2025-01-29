import { AppColors } from '@/constants/AppColors';
import { Dimensions, StyleSheet, useColorScheme } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const isDark = false;
export const styles = StyleSheet.create({
  background: {
    backgroundColor: isDark
      ? AppColors.dark.background
      : AppColors.light.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  headerText: {
    fontSize: 18,
  },
  scrollContainer: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 200,
  },
  item: {
    width: '48%',
    marginBottom: 20,
    display: 'flex',
    gap: 2,
  },
  name: {
    fontSize: 18,
  },
  category: {
    fontSize: 14,
  },
  price: {
    fontSize: 18,
    // fontWeight: 'bold',
  },
  image: {
    width: '100%',
    borderRadius: 10,
    height: 0.45 * screenWidth,
    marginTop: 10,
  },
  button: {},
});

export default styles;
