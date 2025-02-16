import { Plants } from '@/utils/plantsData';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { styles } from './index.css';
import { useGlobalStyles } from '@/hooks/useGlobalStyles';
import { Plant } from '@/constants/Types';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { CustomTabFilter } from '@/components/Tabs';

const filters = ['All', 'Outdoor', 'Indoor'];

function Home() {
  const [plants, setPlants] = useState(Plants);
  const [selectedFilter, setSelectedFilter] = useState('All');
  // const { isDarkMode, toggleTheme } = useTheme();
  const colorScheme = useColorScheme();
  const router = useRouter();

  const isDarkMode = colorScheme === 'dark';
  const { mainColor, text, textMuted, borderRadius, background } =
    useGlobalStyles();

  const navigateToPlant = (plantId: number) => {
    console.log('Navigating to plant with ID:', plantId);
    router.push(`/plant/${plantId}`);
  };

  const renderPlant = (plant: Plant) => (
    <TouchableOpacity
      key={plant.id}
      style={styles.item}
      onPress={() => navigateToPlant(plant.id)}
    >
      <Image
        source={{ uri: plant.image }}
        style={[styles.image, borderRadius]}
      />
      <Text style={[styles.name, text]}>{plant.name}</Text>
      <Text style={[styles.category, textMuted]}>{plant.category}</Text>
      <Text style={[styles.price, mainColor]}>{`$ ${plant.price}`}</Text>
    </TouchableOpacity>
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
    <View style={[background]}>
      <View style={styles.header}>
        <Text style={[styles.headerText, text]}>Plants</Text>
        <View>
          <Link href='/cart'>
            <Text style={[styles.headerText, text]}>Cart </Text>
          </Link>
        </View>
      </View>
      <CustomTabFilter
        filters={filters}
        setSelectedFilter={setSelectedFilter}
        selectedFilter={selectedFilter}
      />
      <ScrollView contentContainerStyle={[styles.scrollContainer]}>
        {plants.map(renderPlant)}
      </ScrollView>
    </View>
  );
}

export default Home;
