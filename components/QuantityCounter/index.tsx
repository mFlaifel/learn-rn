import { View, Text } from 'react-native';
import CustomButton from '../CustomButton';
import { useGlobalStyles } from '@/hooks/useGlobalStyles';
import { styles } from './index.css';

interface QuantityCounterProps {
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  quantity: number;
}

export const QuantityCounter: React.FC<QuantityCounterProps> = ({
  increaseQuantity,
  decreaseQuantity,
  quantity,
}) => {
  const { text } = useGlobalStyles();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
      }}
    >
      <CustomButton
        onPress={decreaseQuantity}
        style={styles.button}
        textStyle={styles.buttonText}
        text='-'
        disabled={quantity === 1}
      />
      <Text style={[styles.quantityText, text]}>{quantity}</Text>
      <CustomButton
        onPress={increaseQuantity}
        style={styles.button}
        textStyle={styles.buttonText}
        text='+'
      />
    </View>
  );
};
