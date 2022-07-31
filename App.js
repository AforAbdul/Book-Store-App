import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Bottomnav from './screens/Bottomnav'
import 'react-native-gesture-handler'
import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Addcategory from './screens/Addcategory';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Bottomnav />
      </NavigationContainer>
      <Addcategory />

      <StatusBar style="auto" />
    </>
  );
}






