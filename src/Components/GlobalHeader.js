import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import {LinearGradient} from 'react-native-linear-gradient'
import { RFPercentage } from 'react-native-responsive-fontsize'
import HeaderRight from './HeaderRight'

const GlobalHeader = (props) => {
  return (
    <LinearGradient 
      start={{x: 0, y: 0}} 
      end={{x: 1, y: 0}} 
      colors={['#004e92','#004492','#003492','#1a2a6c','#302b63',]}
      >
        <View style={{flexDirection:'row',height:hp(10),justifyContent:'space-between'}}>
          <View style={{width:wp(40),alignSelf:'center', flexDirection:'row'}}>
              <Image style={{height:hp(8),width:hp(9),marginHorizontal:'3%'}} source={require('../../assets/Icons/budget.png')}/>
              <View style={{flexDirection:'column',paddingVertical:'2%'}}>
                <Text style={{color:'#fff', fontSize:RFPercentage(2.5),fontWeight:'600'}}>
                  Hello!
                </Text>
                <Text style={{color:'#fff', fontSize:RFPercentage(2.75),fontWeight:'700'}}>
                  {props.name}
                </Text>
              </View>
          </View>

          {props.showDate && <HeaderRight logouts={props.logout}/>}           
        </View>
    </LinearGradient>
  )
}

export default GlobalHeader

const styles = StyleSheet.create({})