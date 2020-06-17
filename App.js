import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home'
import Names from './src/Names';
import NewGame from './src/NewGame';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Homely" component={Home} 
        options={{
          title: 'My Home',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#2C3335',
          },
          headerTintColor: '#fff',
        }}
        />
        <Stack.Screen name="Names" component={Names} 
        options={{
          title: 'Back',
          headerStyle: {
            backgroundColor: '#333945',
          },
          headerTintColor: '#fff',}} />
        <Stack.Screen name="Game" component={NewGame} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// Navigation.navigate() mein screen name aayega naa ki component. 

export default App;
