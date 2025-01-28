import { StatusBar } from 'expo-status-bar';
import { Slot } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGlobalStyles } from '@/hooks/useGlobalStyles';

export default function Layout() {
  const { background } = useGlobalStyles();
  return (
    <View style={[styles.container, background]}>
      <StatusBar style='auto' />
      <SafeAreaView>
        <Slot />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
