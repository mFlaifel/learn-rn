import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const ProductPage = () => {
  const { product } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Page</Text>
      <Text style={styles.productName}>Product: {product}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  productName: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default ProductPage;
