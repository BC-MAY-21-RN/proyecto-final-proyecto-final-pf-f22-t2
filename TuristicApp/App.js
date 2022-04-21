import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/library/utils/theme'
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './src/navigation/Navigation';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
