import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './src/navigation/Navigation';
import { Provider as PaperProvider } from 'react-native-paper';


function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Navigation />  
      </PaperProvider>
    </NavigationContainer>
  );
}

export default App;
