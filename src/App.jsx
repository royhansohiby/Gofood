import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Setelan from './screens/setelan';
import Beranda from './screens/beranda';
import Akun from './screens/Akun';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Beranda" component={Beranda} options={{tabBarIcon: ({color, size}) => (
        <Icon name="home" size={size} color={color} />
      )}} />
      <Tab.Screen name="Setelan" component={Setelan} options={{headerShown: false, tabBarIcon: ({color, size}) => (
        <Icon name="cog" size={size} color={color} />
      )}}/>
      <Tab.Screen name="Akun" component={Akun} options={{headerShown: false, tabBarIcon: ({color, size}) => (
        <Icon name="user" size={size} color={color} />
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