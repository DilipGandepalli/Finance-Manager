import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import MainNavigation from './src/Navigator/MainNavigation'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Store,persistor } from './src/modules/Store';



const App = () => {
  return (
    <Provider store={Store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <SafeAreaProvider>
            <NavigationContainer>
                <MainNavigation/>
            </NavigationContainer>
        </SafeAreaProvider>
     {/* </PersistGate> */}
    </Provider>
  )
}

export default App
