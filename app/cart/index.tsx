import { useGlobalStyles } from '@/hooks/useGlobalStyles';
import { Link } from 'expo-router';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Cart = () => {
  const { background } = useGlobalStyles();
  const items = [
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 20 },
    { id: 3, name: 'Item 3', price: 30 },
  ];

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={[styles.container, background]}>
      <Text style={styles.header}>Cart</Text>
      <Link href='/'>
        <Text>Go Back</Text>
        <Text style={{ color: 'white' }}>Go Back</Text>
      </Link>
      {items.map((item) => (
        <View key={item.id} style={styles.item}>
          <Text>{item.name}</Text>
          <Text>${item.price}</Text>
        </View>
      ))}
      <Text style={styles.total}>Total: ${total}</Text>
      <Button title='Checkout' onPress={() => alert('Proceed to checkout')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default Cart;
