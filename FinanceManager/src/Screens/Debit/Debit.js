import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GlobalHeader from '../../Components/GlobalHeader'
const Debit = () => {
  return (
    <View>
      <GlobalHeader  name={'Dilip'} showDate/>
      <Text>Debit</Text>
    </View>
  )
}

export default Debit

const styles = StyleSheet.create({})