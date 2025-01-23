import { Plants } from '@/utils/dummyData';
import { Text, View, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';

export default function App() {
  const [plants, setPlants] = useState(Plants);

  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}
      >
        <Text>Plants</Text>
        <Link href='/cart'>
          <Text>Cart </Text>
        </Link>
      </View>
      <ScrollView
        style={{
          padding: 10,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 10,
        }}
      >
        {plants.map((item) => (
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
