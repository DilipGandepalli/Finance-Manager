import { StyleSheet, TextInput, View,FlatList, Text,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import GlobalHeader from '../../Components/GlobalHeader'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { RFPercentage } from 'react-native-responsive-fontsize'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-native-modal';
import { removeCustomer } from '../../modules/Home/Actions'

const SearchCustomer = () => {
  const [search,setSearch] = useState('');
  const [filteredData, setFilteredData] = useState();
  const [isVisible,setIsVisible] = useState(false)
  const [selectedData, setSelectedData] = useState(null);


  const totalCustomerData = useSelector((state)=> state.Home.customerDetails);
  const dispatch = useDispatch();
  
  const filteredValue = (item,val)=> {
    if(item !== undefined || item !== null){
      return item?.Name.toLowerCase().includes(val.toLowerCase())
    }
  }
  const searchValue = (text) =>{
    setSearch(text)
    if(text !== ' '){
      let filterData = totalCustomerData?.filter((item)=>{
        return filteredValue(item,text)
      })
      setFilteredData(filterData)
    }
    else{
      filteredData([])
    }
  }

  return (
    <View style={{flex:1}}>
      <GlobalHeader  name={'Dilip'} showDate/>
      <View style={{height:hp(7),marginHorizontal:'1.75%',borderWidth:1.5,marginTop:'2%',borderColor:'#004e92',borderRadius:8,flexDirection:'row',marginBottom:'2%'}}>
        <View style={{justifyContent:'center',alignItems:'center',width:hp(6),marginRight:'-1%'}}>
        <AntDesign 
          name='search1'
          size={RFPercentage(4)}
          color='#084e8c'
          />
        </View>
        <TextInput 
          style={{flex:1,paddingLeft:'2%',fontSize:RFPercentage(2.35),color:'#09457a'}}
          placeholder='Search...'
          placeholderTextColor={'#8ab0d1'}
          onChangeText={(text)=>{searchValue(text)}}
        />
      </View>
      <View style={{flex:1}}>
          {search?.length === 0 ? (
            <FlatList
              style={{marginHorizontal:'2.25%'}}
              data={totalCustomerData}
              showsVerticalScrollIndicator={false}
              renderItem={(item)=>{
                return(                  
                  <TouchableOpacity onPress={()=>{setIsVisible(true),setSelectedData(item.item);}} style={{height:hp(9),backgroundColor:'#e0dcdc',marginVertical:'1%',borderRadius:8,flexDirection:'row',alignItems:'center'}}>
                    <Text style={{color:'#09457a',width:wp(33),textAlign:'center',fontSize:RFPercentage(3),fontWeight:'600'}}> {item.item?.Name}</Text>
                    <View style={{width:wp(33)}}>
                      <Text style={{color:'#09457a',textAlign:'center', fontSize:RFPercentage(3.25), fontWeight:'600'}}> {item.item?.totalAmount} </Text>
                      <Text style={{textAlign:'center', fontSize:RFPercentage(2.1),fontWeight:'600',color:'#2980B9'}}>{item.item?.Nominee}</Text>
                    </View>
                    <Text style={{color:'#09457a',width:wp(33),textAlign:'center',fontSize:RFPercentage(2.5),fontWeight:'600'}}> {item.item?.Address}</Text>
                  </TouchableOpacity>
                )
              }}  
            />
          ) :(
            filteredData?.length !== 0 ? (
              filteredData?.map((item,id)=>{
                return(
                  <TouchableOpacity onPress={()=>{setIsVisible(true),setSelectedData(item)}} key={id} style={{height:hp(9),backgroundColor:'#e0dcdc',marginVertical:'1%',borderRadius:8,flexDirection:'row',alignItems:'center',marginHorizontal:'2%'}}>
                    <Text style={{color:'#09457a',width:wp(33),textAlign:'center',fontSize:RFPercentage(3),fontWeight:'600'}}> {item?.Name}</Text>
                    <View style={{width:wp(33)}}>
                      <Text style={{color:'#09457a',textAlign:'center', fontSize:RFPercentage(3.25), fontWeight:'600'}}> {item?.totalAmount} </Text>
                      <Text style={{textAlign:'center', fontSize:RFPercentage(2.1),fontWeight:'600',color:'#2980B9'}}>{item?.Nominee}</Text>
                    </View>
                    <Text style={{color:'#09457a',width:wp(33),textAlign:'center',fontSize:RFPercentage(2.5),fontWeight:'600'}}> {item?.mobileNumber}</Text>
                  </TouchableOpacity>
                )
              })
            ) :(
                <View style={{justifyContent:'center',alignItems:'center'}}> 
                  <Text style={{fontSize:RFPercentage(2.25),fontWeight:'500',color:'#304f85'}}>
                      No Data found
                  </Text>                
                </View>
              )
            )
          }
      </View>
      <Modal isVisible={isVisible} onBackdropPress={()=>{setIsVisible(false)}}>
          <View style={{height:hp(55),backgroundColor:'#fff',marginHorizontal:'3%',marginBottom:'20%', borderRadius:3}}>
            <TouchableOpacity onPress={()=>{setIsVisible(false)}} style={{flex:0.1,alignSelf:'flex-end',margin:'2%'}}>
              <AntDesign
                  name='close'
                  size={31}
                  color='#004e92'
                />
            </TouchableOpacity>
            <View style={{flex:0.75,padding:'3%',justifyContent:'center',marginBottom:'5%'}}>
              {selectedData && Object.keys(selectedData).map((key, id) => (
                selectedData[key] &&
                  <View key={id} style={{height:hp(4.5),marginBottom:'1%',justifyContent:'center',paddingLeft:'4%'}}>
                    <Text style={{fontSize:RFPercentage(2.25),color:'#823391',fontWeight:'600'}}>{key}  :  <Text style={{fontSize:RFPercentage(2.25),color:'#0d3d6e',fontWeight:'600'}}>{selectedData[key]}</Text></Text>
                  </View>
                ))
              }
            </View>
            <TouchableOpacity onPress={()=>{setIsVisible(false)}} style={{flex:0.12,backgroundColor:'#3d5a91',justifyContent:'center',marginHorizontal:'25%',marginBottom:'2%',borderRadius:5}}>
              <Text style={{textAlign:'center',fontSize:RFPercentage(2.75),fontWeight:'500',color:'#fff'}}>Close</Text>
            </TouchableOpacity>
          </View>
      </Modal>
    </View>
  )
}

export default SearchCustomer

const styles = StyleSheet.create({})