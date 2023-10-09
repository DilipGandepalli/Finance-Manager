import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import MainNavigation from './src/Navigator/MainNavigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'
const App = () => {
  return (
    <SafeAreaProvider>
        <View style={{flex:1}}>
            <NavigationContainer>
                <MainNavigation/>
            </NavigationContainer>
        </View>
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({})