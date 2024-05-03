import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import beranda from './screens/beranda'
import setelan from './screens/setelan';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Beranda" component={beranda} options={{tabBarIcon: ({color, size}) => (
        <Icon name="home" size={size} color={color} />
      )}} />
      <Tab.Screen name="Setelan" component={setelan} options={{tabBarIcon: ({color, size}) => (
        <Icon name="cog" size={size} color={color} />
      )}}/>
    </Tab.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Gofood" component={MyTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App

const styles = StyleSheet.create({})