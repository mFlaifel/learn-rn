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

const ProductPage = () => {
  const { routes } = useRootNavigationState();
  const id = routes[routes.length - 1].params.id;
  const plant = Plants.find((p) => p.id === parseInt(id));
  const { background, text, borderRadius, textMuted } = useGlobalStyles();

  const [tab, setTab] = React.useState<string>('description');

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

  const handleReviewPress = () => {
    setTab('reviews');
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
        onPress={() => console.log('Added to cart')}
        text='Add to Cart'
        style={[borderRadius, styles.addToCartButton, text]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default ProductPage;
