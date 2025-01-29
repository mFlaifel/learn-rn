import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // padding: 12,
    borderRadius: 8,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starContainer: {
    flexDirection: 'row',
    marginRight: 8,
  },
  star: {
    fontSize: 20,
    marginRight: 2,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },
  reviewText: {
    fontSize: 12,
    color: '#666666',
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
});
