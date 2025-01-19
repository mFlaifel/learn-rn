import { Plants } from '@/utils/dummyData';
import { Text, View, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View>
      <Text>Home Page1</Text>
      <Link href='/cart'>
        <Text>Go to Cart</Text>
      </Link>

      <ScrollView>
        {Plants.map((item) => (
          <View key={item.id}>
            <Text>{item.name}</Text>
            <Image
              source={{
                uri: item.image,
              }}
              style={{ width: 100, height: 100 }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
