import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabNavigator from './BottomTabNavigator';
const MainNavigation = () => {
    const Stack=createNativeStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen name='BottomTabNavigator' component={BottomTabNavigator} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default MainNavigation

const styles = StyleSheet.create({})