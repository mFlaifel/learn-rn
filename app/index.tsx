import { StatusBar } from 'react-native';
import Home from './home';
import { useGlobalStyles } from '@/hooks/useGlobalStyles';

export default function App() {
  const { background } = useGlobalStyles();
  return (
    <>
      {/* <StatusBar
        backgroundColor={background.backgroundColor}
        // barStyle={getStatusBarStyle()}
        barStyle={'light-content'}
        animated={true}
      /> */}
      <Home />
    </>
    // </ThemeProvider>
  );
}
