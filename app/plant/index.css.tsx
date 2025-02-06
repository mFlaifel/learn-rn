import { AppColors } from '@/constants/AppColors';
import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: Dimensions.get('window').height * 0.4,
  },
  container: {
    height: Dimensions.get('window').height,
  },
  detailsContainer: {
    top: -25,
    left: 0,
    right: 0,
    paddingTop: 25,
    padding: 10,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    gap: 20,
    zIndex: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  productName: {
    fontSize: 18,
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
  price: {
    fontSize: 18,
    borderWidth: 1,
    minWidth: 100,
  },
  goBack: {
    position: 'absolute',
    left: 10,
    top: 10,
    width: 100,
    height: 40,
  },
  quantityText: {
    textAlign: 'center',
    minWidth: 30,
  },
  button: {
    borderColor: AppColors.main,
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 5,
    paddingBottom: 3,
  },
  buttonText: {
    color: AppColors.main,
    fontSize: 18,
  },
  addToCartButton: {
    backgroundColor: AppColors.main,
    height: 50,
    width: '80%',
    position: 'absolute',
    bottom: 60,
    left: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
