import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import { useGlobalStyles } from '@/hooks/useGlobalStyles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isDarkMode } = useTheme();
  const { background } = useGlobalStyles();
  const barStyle = isDarkMode ? 'light-content' : 'dark-content';

  return (
    <>
      <StatusBar
        backgroundColor={background.backgroundColor}
        barStyle={barStyle}
        animated={true}
      />
      {children}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Layout;
