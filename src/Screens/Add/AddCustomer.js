import { StyleSheet, Text, View,Image,TextInput, ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import GlobalHeader from '../../Components/GlobalHeader'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { RFPercentage } from 'react-native-responsive-fontsize'

const AddCustomer = () => {
  const iconData = [
    {
      'placeholderText':'Enter Customer Name',
      'imageSource':require("../../../assets/Icons/userIcon.png"),
      'height':'4.15',
      'width':'3.7'
    },
    {
      'placeholderText':'Enter Address',
      'imageSource':require("../../../assets/Icons/Address.png"),
      'height':'4.5',
      'width':'3.75'
    },
    {
      'placeholderText':'Enter Mobile Number',
      'imageSource':require("../../../assets/Icons/mobileIcon.png"),
      'height':'4.55',
      'width':'4.25'
    },
    {
      'placeholderText':'Enter Nominee Name',
      'imageSource':require("../../../assets/Icons/Nominee.png"),
      'height':'4.25',
      'width':'5.25'
    },
    {
      'placeholderText':'Enter Total Amount',
      'imageSource':require("../../../assets/Icons/amountIcon.jpg"),
      'height':'7',
      'width':'4.35'
    },
    {
      'placeholderText':'Enter Interest Rate',
      'imageSource':require("../../../assets/Icons/interestIcon.png"),
      'height':'4.25',
      'width':'4.25'
    },
    {
      'placeholderText':'Enter Surity Details',
      'imageSource':require("../../../assets/Icons/surity2.png"),
      'height':'6',
      'width':'5.5'
    }
  ]


  const TextInputWithIcon = ()=>{
    return(
      iconData.map((item,id)=>{
        return(
          <View key={id} style={{height:hp(10), flexDirection:'row',marginTop:'2%'}}>
            <View style={{height:hp(8),flex:0.175,flexDirection:'row',justifyContent:'center',alignItems:'center',}}> 
              <Image source={item.imageSource} style={{height:hp(item.height),width:hp(item.width),tintColor:'#003492'}}/>
            </View>
            <View style={{height:hp(8),flex:0.85,borderBottomWidth:1,borderBottomColor:'#003492',marginRight:'2%'}}>
              <Text style={{fontWeight:'400',color:'#000',fontSize:RFPercentage(2)}}>{item.placeholderText}</Text>
              <TextInput 
                placeholderTextColor={'#003492'}
                style={{fontSize:RFPercentage(2.5),fontWeight:'400'}}
              />
            </View>
          </View>

        )
      })
      
          )
  }



  return (
    <>
      <GlobalHeader name={'Dilip'} showDate/>
        <ScrollView style={{flex:1}} contentContainerStyle={{}}>
          <TextInputWithIcon/>
        </ScrollView>
        
    </>
  )
}

export default AddCustomer

const styles = StyleSheet.create({})