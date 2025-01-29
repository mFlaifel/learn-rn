import { StatusBar } from 'expo-status-bar';
import { Slot } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useGlobalStyles } from '@/hooks/useGlobalStyles';

export default function Layout() {
  const { background } = useGlobalStyles();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={[styles.container, background]}>
        <StatusBar style='auto' />
        <SafeAreaView>
          <Slot />
        </SafeAreaView>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
