import { Plant } from '@/constants/Types';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './index.css';
import StarRating from './StarRating';
import { useGlobalStyles } from '@/hooks/useGlobalStyles';

interface ReviewCardProps {
  plantData: Plant;
  onPress: () => void;
}

const ReviewCard: React.FC<ReviewCardProps> = (props) => {
  const onPress = props?.onPress;
  const plantData = props?.plantData;
  const rating = plantData?.rating;
  const reviewCount = plantData?.reviews.length;
  const userAvatars = plantData?.reviews.map((review) => review.avatar);
  const { text } = useGlobalStyles();
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.leftContent}>
          <StarRating rating={rating} />
          <Text style={[styles.ratingText, text]}>{rating}</Text>
        </View>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.reviewText}>
            {reviewCount} Reviews {'>'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.avatarContainer}>
        {userAvatars.slice(0, 4).map((avatar, index) => (
          <Image
            key={index}
            source={{ uri: avatar }}
            style={[styles.avatar, { marginLeft: index > 0 ? -10 : 0 }]}
          />
        ))}
      </View>
    </View>
  );
};

export default ReviewCard;
