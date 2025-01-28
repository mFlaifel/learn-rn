import { Colors } from '@/constants/Colors';
import { Dimensions, StyleSheet, useColorScheme } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const isDark = false;
export const styles = StyleSheet.create({
  background: {
    backgroundColor: isDark ? Colors.dark.background : Colors.light.background,
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
    paddingBottom: 80,
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
  filtersContainer: {
    flexDirection: 'row',
    gap: 10,
    padding: 10,
  },
  filter: {
    fontSize: 16,
    paddingVertical: 4,
    paddingHorizontal: 4,
    textAlign: 'center',
    minWidth: 85,
  },
});

export default styles;
