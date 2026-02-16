import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainTabNavigator from './src/navigation/MainTab/MainTabNavigator';
import { paperLightTheme, paperDarkTheme, navLightTheme, navDarkTheme } from './src/theme/paperTheme';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const paperTheme = isDarkMode ? paperDarkTheme : paperLightTheme;
  const navTheme = isDarkMode ? navDarkTheme : navLightTheme;

  return (
    <SafeAreaProvider>
      <PaperProvider theme={paperTheme}>
        <NavigationContainer theme={navTheme}>
          <MainTabNavigator />
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
