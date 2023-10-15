import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from 'react-native-responsive-fontsize';
const TextInputWithIcon = ({item,id,onChangeText,value})=>{
    return(
    <View key={id} style={{height:hp(9.25), flexDirection:'row',marginTop:'0.75%'}}>
        <View style={{height:hp(8),flex:0.175,flexDirection:'row',justifyContent:'center',alignItems:'center',}}> 
        <Image source={item.imageSource} style={{height:hp(item.height),width:hp(item.width),tintColor:'#003492'}}/>
        </View>
        <View style={{height:hp(7),flex:0.85,borderBottomWidth:1,borderBottomColor:'#003492',marginRight:'2.5%',paddingBottom:'2.5%'}}>
        <Text style={{fontWeight:'500',color:'#000',fontSize:RFPercentage(1.75)}}>{item.placeholderText}</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
            <TextInput 
                onChangeText={onChangeText}
                placeholderTextColor={'#003492'}
                style={{fontSize:RFPercentage(2.5),fontWeight:'400',width:'90%'}}
                keyboardType= {item.keyboard? 'numeric':'default'}
                value={value}
            />
            {item.date ?
                <TouchableOpacity style={{height:hp(5),width:hp(5),bottom:'2%',marginRight:'1%',justifyContent:'center',alignItems:'center'}}>
                    <AntDesign name="calendar" color='#516a99'style={{fontSize:RFPercentage(4.5)}}/>
                </TouchableOpacity>
                :''
            }
        </View>
        </View>
    </View>

    )
  }

export default TextInputWithIcon

const styles = StyleSheet.create({})