import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GlobalHeader from '../../Components/GlobalHeader'

const AddCustomer = () => {
  return (
    <View>
      <GlobalHeader  name={'Dilip'} showDate logout/>
      <Text>AddCustomer</Text>
    </View>
  )
}

export default AddCustomer

const styles = StyleSheet.create({})