import * as React from 'react';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import {Navigation} from './src/navigation/Navigation';
import { Provider as PaperProvider,
   DefaultTheme as PaperDefaultTheme, 
   DarkTheme as PaperDarkTheme } from 'react-native-paper';

const CustomDefaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors:{
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors
  }
}
const CustomDarkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors:{
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors
  }
}
const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

function App() {
  const[isDarkTheme,setIsDarkTheme] = React.useState(false);
  return (
    <NavigationContainer  theme={theme}>
      <PaperProvider theme={theme}>
        <Navigation />  
      </PaperProvider>
    </NavigationContainer>
  );
}

export default App;
