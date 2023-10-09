import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Moment from 'moment'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Feather from 'react-native-vector-icons/Feather'

const HeaderRight = (props) => {
    
  return (
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{width:wp(40),justifyContent:'flex-end',paddingBottom:'2%'}}>
            <Text style={{color:'#fff',fontSize:RFPercentage(3.25),textAlign:'center',paddingBottom:'1.5%'}}>{Moment().format("dddd")}</Text>
            <Text style={{color:'#fff',fontSize:RFPercentage(2.75),textAlign:'center'}}>{Moment().format("DD, MMM YYYY")}</Text>
        </View>
        {props.logouts &&
            <TouchableOpacity style={{width:wp(10),paddingVertical:'5%',alignSelf:'center'}}>
                <Feather name='power' style={{fontSize:RFPercentage(4),color:'#fff'}}/>
            </TouchableOpacity>
        }
        
    </View>
  )
}

export default HeaderRight

const styles = StyleSheet.create({})