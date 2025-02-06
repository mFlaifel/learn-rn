import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Dimensions,
} from 'react-native';
import { Link, useRootNavigationState, useRouter } from 'expo-router';
import { useGlobalStyles } from '@/hooks/useGlobalStyles';
import { Plants } from '@/utils/plantsData';
import { AppColors } from '@/constants/AppColors';
import CustomButton from '@/components/CustomButton';
import ReviewCard from '@/components/ReviewCard';
import { CustomTabFilter } from '@/components/Tabs';
import { ScrollView } from 'react-native-gesture-handler';
import { useCartContext } from '@/context/CartContext';
import { CartItem } from '@/constants/Types';

import { styles } from './index.css';
import { QuantityCounter } from '@/components/QuantityCounter';

const ProductPage = () => {
  const { routes } = useRootNavigationState();
  const id = routes[routes.length - 1].params.id;
  const plant = Plants.find((p) => p.id === parseInt(id));
  const { background, text, borderRadius, textMuted } = useGlobalStyles();

  const [tab, setTab] = React.useState<string>('description');

  const [quantity, setQuantity] = React.useState(1);
  const { addToCart, removeFromCart } = useCartContext();

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity(quantity - 1);
  };

  const handleReviewPress = () => {
    setTab('reviews');
  };

  const handleAddToCart = () => {
    const item = { ...plant, quantity } as CartItem;
    addToCart(item);
  };

  const renderReview = (
    review: { avatar: string; review: string; name: string },
    index: any
  ) => (
    <View
      style={[{ flexDirection: 'row', gap: 10 }]}
      key={review.avatar + index}
    >
      <Image
        source={{ uri: review.avatar }}
        style={{ width: 50, height: 50, borderRadius: 25 }}
      />
      <View>
        <Text style={[textMuted]}>{review.name}</Text>
        <Text style={[text, { fontSize: 14 }]}>{review.review}</Text>
      </View>
    </View>
  );

  if (!plant) {
    return (
      <View style={[styles.container, background]}>
        <Text style={text}>Plant not found</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, background]}>
      <Image
        source={{ uri: plant.image }}
        style={styles.image}
        resizeMode={'cover'}
      />
      <Link href='/' style={[styles.goBack, { color: 'black' }]}>
        <Text style={[{ color: 'black', fontSize: 25 }]}>く</Text>
      </Link>

      <View style={[styles.detailsContainer, background]}>
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
          <QuantityCounter
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            quantity={quantity}
          />
        </View>
        <ReviewCard plantData={plant} onPress={handleReviewPress} />

        <View>
          <CustomTabFilter
            filters={['description', 'care', 'reviews']}
            selectedFilter={tab}
            setSelectedFilter={setTab}
            textStyle={{ minWidth: 120 }}
          />

          {tab === 'description' ? (
            <Text style={[styles.description, text]}> {plant.description}</Text>
          ) : tab === 'care' ? (
            <Text style={[styles.description, text]}> {plant.careMethod}</Text>
          ) : (
            <>
              <ScrollView
                style={{
                  height: Dimensions.get('window').height * 0.2,
                }}
              >
                <View style={{ padding: 10, gap: 20 }}>
                  {plant.reviews.map(renderReview)}
                </View>
              </ScrollView>
            </>
          )}
        </View>
      </View>

      <CustomButton
        onPress={handleAddToCart}
        text='Add to Cart'
        style={[borderRadius, styles.addToCartButton, text]}
      />
    </View>
  );
};

export default ProductPage;
