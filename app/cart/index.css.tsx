import { AppColors } from '@/constants/AppColors';
import { Dimensions, StyleSheet } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    // backgroundColor: '#fff',
    minHeight: '100%',
  },
  header: {
    marginBottom: 20,
    color: 'red',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 0.25 * screenWidth,
    borderRadius: 10,
    height: 0.25 * screenWidth,
    marginTop: 10,
  },
  title: {
    width: 80,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  goBackText: {
    width: 80,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  itemImage: {},
  description: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    // backgroundColor: 'black',
    padding: 15,
    alignItems: 'center',
  },
  promo: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  input: {
    flexGrow: 1,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  checkout: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: AppColors.main,
    paddingHorizontal: 20,
    height: 50,
    // width: '80%',
    // position: 'absolute',
    // bottom: 60,
    // left: '10%',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
