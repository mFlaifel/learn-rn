import { CartItem } from '@/constants/Types';
import { useCartContext } from '@/context/CartContext';
import { useGlobalStyles } from '@/hooks/useGlobalStyles';
import { Link } from 'expo-router';
import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, Image } from 'react-native';
import { styles } from './index.css';
import CustomButton from '@/components/CustomButton';
import { QuantityCounter } from '@/components/QuantityCounter';
import { CartPlantCard } from '@/components/CartPlantCard';

const Cart = () => {
  const { background, text, textMuted, borderRadius } = useGlobalStyles();

  const [coupon, setCoupon] = React.useState('');

  const { cart } = useCartContext();
  console.log(cart);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const renderCartItem = (item: CartItem) => {
    return <CartPlantCard item={item} key={item.id} />;
  };
  return (
    <View style={[styles.container, background]}>
      <View style={styles.header}>
        <Link href='/' style={[styles.goBackText, text]}>
          <Text>Go Back</Text>
        </Link>
        <Text style={[text, styles.title]}>Cart</Text>
        <Text style={[styles.goBackText, textMuted]}>{cart.length} items</Text>
      </View>
      {cart.length === 0 ? (
        <Text style={[text, textMuted]}>Your cart is empty</Text>
      ) : (
        cart.map(renderCartItem)
      )}

      <View style={styles.footer}>
        <View style={styles.promo}>
          <TextInput
            style={[text, styles.input, { color: 'white' }]}
            placeholder='Insert promo code'
            placeholderTextColor='white'
            value={coupon}
            onChangeText={setCoupon}
          />
          <CustomButton
            onPress={() => alert('Applying promo code')}
            text='Apply'
            style={[borderRadius, styles.button, text]}
          />
        </View>
        <View style={styles.checkout}>
          <View>
            <Text style={[text, styles.total]}>Subtotal: ${total}</Text>
            <Text style={[text, styles.total]}>Shipping: $0</Text>
          </View>
          <CustomButton
            text='Checkout'
            onPress={() => alert('Proceed to checkout')}
            style={[borderRadius, styles.button, text]}
          />
        </View>
      </View>
    </View>
  );
};

export default Cart;
