import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  Link,
  useLocalSearchParams,
  usePathname,
  useRootNavigationState,
  useRouter,
} from 'expo-router';

const ProductPage = () => {
  const { routes } = useRootNavigationState();
  const id = routes[routes.length - 1].params.id;
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Link href='/'>
        <Text>Go Back</Text>
      </Link>
      <Text style={styles.title}>Product Page</Text>
      <Text style={styles.productName}>Product: {id}</Text>
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
