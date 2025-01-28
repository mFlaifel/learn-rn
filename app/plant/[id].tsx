import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { Link, useRootNavigationState, useRouter } from 'expo-router';
import { useGlobalStyles } from '@/hooks/useGlobalStyles';
import { Plants } from '@/utils/plantsData';
import { goBack } from 'expo-router/build/global-state/routing';
import { Colors } from '@/constants/Colors';
import CustomButton from '@/components/CustomButton';

const ProductPage = () => {
  const { routes } = useRootNavigationState();
  const id = routes[routes.length - 1].params.id;
  const plant = Plants.find((p) => p.id === parseInt(id));
  const { background, text, borderRadius } = useGlobalStyles();

  const [quantity, setQuantity] = React.useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity(quantity - 1);
  };

  if (!plant) {
    return (
      <View style={[styles.container, background]}>
        <Text style={text}>Plant not found</Text>
      </View>
    );
  }

  return (
    <View style={[background]}>
      <Image
        source={{ uri: plant.image }}
        style={styles.image}
        resizeMode={'cover'}
      />
      <Link href='/' style={[styles.goBack, { color: 'black' }]}>
        <Text style={[{ color: 'black' }]}>Go Back</Text>
      </Link>

      <View style={[styles.container, background]}>
        <Text style={[styles.productName, text]}> {plant.name}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            alignItems: 'center',
          }}
        >
          <Text style={[styles.price, text]}> ${plant.price}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <CustomButton
              onPress={increaseQuantity}
              style={styles.button}
              textStyle={styles.buttonText}
              text='+'
            />
            <Text style={[styles.quantityText, text]}>{quantity}</Text>
            <CustomButton
              onPress={decreaseQuantity}
              style={styles.button}
              textStyle={styles.buttonText}
              text='-'
            />
          </View>
        </View>
        <Text style={[styles.title, text]}>Product Page</Text>
        <Text style={[styles.description, text]}>{plant.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 10,
    paddingTop: 25,
    padding: 10,
    marginTop: -25,
    borderColor: 'red',
    borderWidth: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // flex: 1,
    // justifyContent: 'flex-start', // Align items to the top
    // alignItems: 'center',
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
  image: {
    width: '100%',
    height: '60%',
  },
  goBack: {
    position: 'absolute',
    left: 10,
    top: 10,
  },
  quantityText: {
    textAlign: 'center',
    minWidth: 30,
  },
  button: {
    borderColor: Colors.main,
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 5,
    paddingBottom: 3,
  },
  buttonText: {
    color: Colors.main,
    fontSize: 18,
  },
});

export default ProductPage;
