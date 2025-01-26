import { Plants } from '@/utils/plantsData';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { styles } from './index.css';
import { useGlobalStyles } from '@/hooks/useGlobalStyles';
import { Plant } from '@/constants/Types';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme.web';

const filters = ['All', 'Outdoor', 'Indoor'];

export default function App() {
  const [plants, setPlants] = useState(Plants);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const colorScheme = useColorScheme();
  const router = useRouter();

  const isDarkMode = colorScheme === 'dark';
  const { mainColor, text, textMuted, borderRadius } = useGlobalStyles();

  const navigateToPlant = (plantId: number) => {
    // Navigate to the plant details page
    console.log('Navigating to plant with ID:', plantId);
    router.push(`/plant/${plantId}`);
  };

  const renderPlant = (plant: Plant) => (
    <View
      key={plant.id}
      style={styles.item}
      onTouchEnd={() => navigateToPlant(plant.id)}
    >
      <Image
        source={{ uri: plant.image }}
        style={[styles.image, borderRadius]}
      />
      <Text style={[styles.name, text]}>{plant.name}</Text>
      <Text style={[styles.category, textMuted]}>{plant.category}</Text>
      <Text style={[styles.price, mainColor]}>{`$ ${plant.price}`}</Text>
    </View>
  );

  useEffect(() => {
    if (selectedFilter === 'All') {
      setPlants(Plants);
    } else {
      const filteredPlants = Plants.filter(
        (plant) => plant.category === selectedFilter
      );
      setPlants(filteredPlants);
    }
  }, [selectedFilter]);

  return (
    <View>
      <View style={styles.header}>
        <Text style={[styles.headerText, text]}>Plants</Text>
        <Link href='/cart'>
          <Text style={[styles.headerText, text]}>Cart </Text>
        </Link>
      </View>
      <View style={styles.filtersContainer}>
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter}
            onPress={() => setSelectedFilter(filter)}
          >
            <Text
              style={[
                textMuted,
                styles.filter,
                borderRadius,
                {
                  backgroundColor:
                    filter === selectedFilter ? Colors.main : 'unset',
                  color:
                    filter === selectedFilter
                      ? Colors.dark.text
                      : isDarkMode
                      ? Colors.dark.textMuted
                      : Colors.light.textMuted,
                },
              ]}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView contentContainerStyle={[styles.scrollContainer]}>
        {plants.map(renderPlant)}
      </ScrollView>
    </View>
  );
}
