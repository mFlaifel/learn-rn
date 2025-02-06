import { useState } from 'react';

import { View, Image, Text, Button } from 'react-native';
import { QuantityCounter } from '../QuantityCounter';

import { styles } from './index.css';
import { useGlobalStyles } from '@/hooks/useGlobalStyles';
import { CartItem } from '@/constants/Types';
import { useCartContext } from '@/context/CartContext';
import CustomButton from '../CustomButton';

interface CartItemProps {
  item: CartItem;
}

export const CartPlantCard = ({ item }: CartItemProps) => {
  const { text, textMuted, borderRadius } = useGlobalStyles();
  const [quantity, setQuantity] = useState(item.quantity);

  const { increaseCartItemQuantity, decreaseCartItemQuantity, removeFromCart } =
    useCartContext();

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    increaseCartItemQuantity(item.id);
  };

  const decreaseQuantity = () => {
    if (quantity === 1) {
      return;
    }
    setQuantity(quantity - 1);
    decreaseCartItemQuantity(item.id);
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <View key={item.id} style={styles.item}>
      <View style={styles.description}>
        <Image
          source={{ uri: item.image }}
          style={[styles.image, borderRadius]}
        />
        <View style={styles.itemDetails}>
          <Text style={[text]}>{item.name}</Text>

          <Text style={[textMuted]}>Qty:{item.quantity}</Text>
          <QuantityCounter
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            quantity={quantity}
          />
        </View>
      </View>
      <View style={styles.price}>
        <CustomButton text='X' onPress={handleRemove} />

        <Text style={[text, textMuted]}>${item.price}</Text>
      </View>
    </View>
  );
};
