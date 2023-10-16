import { StyleSheet, Text, View,Image,TextInput, ScrollView,Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import GlobalHeader from '../../Components/GlobalHeader'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { iconData } from './IconData';
import TextInputWithIcon from '../../Components/Input';
import { useDispatch } from 'react-redux';
import { addNewCustomer, totalExpanses, totalInvestment } from '../../modules/Home/Actions';
import { useSelector } from 'react-redux';
import Modal from 'react-native-modal'
const AddCustomer = () => {
  const dispatch=useDispatch();

  const investmentData = useSelector((state)=> state.Home.customerDetails)
  const [tempData,setTempData] = useState()
  const [isVisible,setIsVisible] = useState(false)

  const formData ={
    Name:'',
    Address:'',
    MobileNumber:'',
    Nominee:'',
    TotalAmount:'',
    InterestRate:'',
    SurityDetails:'',
    OtherDetails:'',
    Date:''
  }
  
  const handleInputText = (text, field) => {
      formData[field] = text
  };

  const onSubmit = ()=>{
    setIsVisible(true)
    setTempData(formData)
  }

  const onPressYes = () =>{
    setIsVisible(false)
    dispatch(addNewCustomer(tempData))
  }
  
  return (
    <>
      <GlobalHeader name={'Dilip'} showDate/>
      <View style={{flex:1}}>
        <ScrollView style={{marginTop:'4%'}} contentContainerStyle={{}}>
          {
            iconData.map((item,id)=>{
              return(
                <TextInputWithIcon key={id} item={item} onChangeText={(text)=>{handleInputText(text,item.field)}} />
              )
            })
          }
        </ScrollView>
        <TouchableOpacity style={{
            height:hp(5.5),
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#214ea3',
            justifyContent:'center',
            alignItems:'center',
          }} 
          onPress={()=>{onSubmit()}}
          >
          <Text style={{color:'#fff',fontSize:RFPercentage(3.25), fontWeight:'500'}}>Add</Text>
        </TouchableOpacity>
      </View>
      <Modal isVisible={isVisible} onBackdropPress={()=>{setIsVisible(false)}} animationIn={'slideInDown'}>
        <View style={{alignSelf:'center',height:hp(18),width:wp(75),backgroundColor:'#fff',borderRadius:5}}>
          <View style={{flex:0.5,alignItems:'center'}}>
            <Text style={{fontSize:RFPercentage(3),fontWeight:'400',color:'#000',textAlign:'center',paddingTop:'5%'}}>
              Do you Want to add these Customer?
            </Text>
          </View>
          <View style={{flex:0.5,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity style={{height:hp(4.6),backgroundColor:'#6f91d1',width:wp(27),alignItems:'center',justifyContent:'center',marginHorizontal:'3%',borderRadius:5}}
              onPress={()=>{setIsVisible(false)}}
            >
              <Text style={{color:'#fff',fontSize:RFPercentage(2.5),fontWeight:'500'}}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height:hp(4.6),backgroundColor:'#6f91d1',width:wp(27),alignItems:'center',justifyContent:'center',marginHorizontal:'3%',borderRadius:5}}
              onPress={()=>{onPressYes()}}>
              <Text style={{color:'#fff',fontSize:RFPercentage(2.5),fontWeight:'500'}}>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
        
    </>
  )
}

export default AddCustomer

const styles = StyleSheet.create({})