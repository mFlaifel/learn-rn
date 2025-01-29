import { View, Text } from 'react-native';
import { styles } from './index.css';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const totalStars = 5;
  const filledStars = Math.floor(rating);

  return (
    <View style={styles.starContainer}>
      {[...Array(totalStars)].map((_, index) => (
        <Text
          key={index}
          style={[
            styles.star,
            { color: index < filledStars ? '#FFD700' : '#E0E0E0' },
          ]}
        >
          ★
        </Text>
      ))}
    </View>
  );
};

export default StarRating;
