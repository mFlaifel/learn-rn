import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    height: 100,
    marginTop: 10,
  },
  button: {},
  filtersContainer: { flexDirection: 'row', gap: 10, padding: 10 },
  filter: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export default styles;
