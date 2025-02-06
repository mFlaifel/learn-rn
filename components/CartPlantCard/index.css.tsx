import { AppColors } from '@/constants/AppColors';
import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  image: {
    width: 0.25 * screenWidth,
    borderRadius: 10,
    height: 0.25 * screenWidth,
    marginTop: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    height: 0.25 * screenWidth,
  },
  description: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  itemDetails: {
    justifyContent: 'space-between',
    gap: 10,
  },
  price: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
