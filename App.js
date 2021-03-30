import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BookTransaction from './Screens/BookTransaction'
import SearchScreen from './Screens/SearchScreen'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
export default function App() {
  return (
    
      <AppContainer></AppContainer>
   
  );
}
const TabNavigator = createBottomTabNavigator({
  Transaction:{
    screen:BookTransaction
  },
  Search:{
    screen:SearchScreen
  }
})
const AppContainer = createAppContainer(TabNavigator)
