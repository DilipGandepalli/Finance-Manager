import { StyleSheet, TextInput, View,FlatList, Text,TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import GlobalHeader from '../../Components/GlobalHeader'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { RFPercentage } from 'react-native-responsive-fontsize'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-native-modal';
import { removeCustomer } from '../../modules/Home/Actions'

const styles = StyleSheet.create({
  mainContainer:{
    flex:1
  },
  deleteUserConfirmText:{
    fontSize:RFPercentage(2.2),
    color:'#f2f3f3',
    fontWeight:'700'
  },
  removeUserContainer2:{
    width:wp(22),
    backgroundColor:'#ed9064',
    marginHorizontal:'5%',
    height:hp(4.65),
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#91390f',
    borderWidth:2
  },
  removeUserContainer1:{
    width:wp(22),
    backgroundColor:'#a3d160',
    marginHorizontal:'6%',
    marginRight:'2%',
    height:hp(4.65),
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#0a9270',
    borderWidth:2
  },
  removeUserContainer:{
    flex:0.6,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  deleteText:{
    fontSize:RFPercentage(2.75),
    color:'#315a84',
    fontWeight:'500'
  },
  deleteTextContainer:{
    flex:0.3,
    alignItems:'center',
    justifyContent:'center'
  },
  closeIconContainer:{
    alignSelf:'flex-end',
    padding:'2.5%'
  },
  deleteConfirmContainer:{
    height:hp(22),
    backgroundColor:'#fff',
    marginHorizontal:'7%',
    borderRadius:5,
    marginBottom:'12%'
  },
  detailCloseContainerText:{
    fontSize:RFPercentage(2.6),
    fontWeight:'500',
    color:'#f2f3f3'
  },
  detailsCloseContainer:{
    height:hp(5),
    flex:0.5,
    backgroundColor:'#5a73a2',
    marginHorizontal:'5%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5
  },
  detailsDeleteContainer:{
    height:hp(5),
    flex:0.5,
    backgroundColor:'#ed9064',
    marginHorizontal:'5%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    borderColor:"#91390f",
    borderWidth:1
  },
  detailsDeleteContainer1:{
    flex:0.11,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  detailsTextKey:{
    fontSize:RFPercentage(2.25),
    color:'#823391',
    fontWeight:'600'
  },
  detailsValueText:{
    fontSize:RFPercentage(2.25),
    color:'#0d3d6e',
    fontWeight:'600'
  },
  keyValueContainer:{
    height:hp(4.5),
    marginBottom:'1%',
    justifyContent:'center',
    paddingLeft:'4%'
  },
  detailsContainer:{
    flex:0.75,
    padding:'3%',
    justifyContent:'center',
    marginBottom:'5%'
  },
  detailsModalContainer:{
    height:hp(55),
    backgroundColor:'#f2f3f3',
    marginHorizontal:'3%',
    marginBottom:'20%', 
    borderRadius:5
  },
  noDataText:{
    fontSize:RFPercentage(2.25),
    fontWeight:'500',
    color:'#304f85'
  },
  noDataCotainer:{
    justifyContent:'center',
    alignItems:'center'
  },
  SearchTextDate:{
    color:'#09457a',
    width:wp(33),
    textAlign:'center',
    fontSize:RFPercentage(2.5),
    fontWeight:'600'
  },
  interestContainer:{
    width:wp(33)
  },
  interestAmount:{
    color:'#09457a',
    textAlign:'center', 
    fontSize:RFPercentage(3.25), 
    fontWeight:'600'
  },
  totalInterestText:{
    textAlign:'center', 
    fontSize:RFPercentage(2.1),
    fontWeight:'600',
    color:'#2980B9'
  },
  nameText:{
    color:'#09457a',
    width:wp(33),
    textAlign:'center',
    fontSize:RFPercentage(3),
    fontWeight:'600'
  },
  filteredDetailsContainer:{
    height:hp(9),
    backgroundColor:'#e0dcdc',
    marginVertical:'1%',
    borderRadius:8,
    flexDirection:'row',
    alignItems:'center',
    marginHorizontal:'2%'
  },
  filteredDetailsContainer2:{
    height:hp(9),
    backgroundColor:'#e0dcdc',
    marginVertical:'1%',
    borderRadius:8,
    flexDirection:'row',
    alignItems:'center'
  },
  flatLisContainer:{
    marginHorizontal:'2.25%'
  },
  textInputContainer:{
    flex:1,
    paddingLeft:'2%',
    fontSize:RFPercentage(2.35),
    color:'#09457a'
  },
  SearchIconContainer:{
    justifyContent:'center',
    alignItems:'center',
    width:hp(6),
    marginRight:'-1%'
  },
  inputContainer:{
    height:hp(7),
    marginHorizontal:'1.75%',
    borderWidth:1.5,
    marginTop:'2%',
    borderColor:'#004e92',
    borderRadius:8,
    flexDirection:'row',
    marginBottom:'2%'
  },

})
const SearchCustomer = () => {
  const [search,setSearch] = useState('');
  const [filteredData, setFilteredData] = useState();
  const [isVisible,setIsVisible] = useState(false)
  const [selectedData, setSelectedData] = useState(null);
  const [confirmDelete,setConfirmDelete] = useState(false)

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
    <View style={styles.mainContainer}>
      <GlobalHeader  name={'Dilip'} showDate/>
      <View style={styles.inputContainer}>
        <View style={styles.SearchIconContainer}>
        <AntDesign 
          name='search1'
          size={RFPercentage(4)}
          color='#084e8c'
          />
        </View>
        <TextInput 
          style={styles.textInputContainer}
          placeholder='Search...'
          placeholderTextColor={'#8ab0d1'}
          onChangeText={(text)=>{searchValue(text)}}
        />
      </View>
      <View style={{flex:1}}>
          {search?.length === 0 ? (
            <FlatList
              style={styles.flatLisContainer}
              data={totalCustomerData}
              showsVerticalScrollIndicator={false}
              renderItem={(item)=>{
                return(                  
                  <TouchableOpacity onPress={()=>{setIsVisible(true),setSelectedData(item.item);}} style={styles.filteredDetailsContainer2}>
                    <Text style={styles.nameText}> {item.item?.Name}</Text>
                    <View style={styles.interestContainer}>
                      <Text style={styles.interestAmount}> {item.item?.totalAmount} </Text>
                      <Text style={styles.totalInterestText}>{item.item?.Nominee}</Text>
                    </View>
                    <Text style={styles.SearchTextDate}> {item.item?.Address}</Text>
                  </TouchableOpacity>
                )
              }}  
            />
          ) :(
            filteredData?.length !== 0 ? (
              filteredData?.map((item,id)=>{
                return(
                  <TouchableOpacity onPress={()=>{setIsVisible(true),setSelectedData(item)}} key={id} style={styles.filteredDetailsContainer}>
                    <Text style={styles.nameText}> {item?.Name}</Text>
                    <View style={styles.interestContainer}>
                      <Text style={styles.interestAmount}> {item?.totalAmount} </Text>
                      <Text style={styles.totalInterestText}>{item?.Nominee}</Text>
                    </View>
                    <Text style={styles.SearchTextDate}> {item?.mobileNumber}</Text>
                  </TouchableOpacity>
                )
              })
            ) :(
                <View style={styles.noDataCotainer}> 
                  <Text style={styles.noDataText}>
                      No Data found
                  </Text>                
                </View>
              )
            )
          }
      </View>
      <Modal isVisible={isVisible} onBackdropPress={()=>{setIsVisible(false)}}>
        <View style={styles.detailsModalContainer}>
          <TouchableOpacity onPress={()=>{setIsVisible(false)}} style={{flex:0.1,alignSelf:'flex-end',margin:'2%'}}>
            <AntDesign
                name='close'
                size={31}
                color='#004e92'
              />
          </TouchableOpacity>
          <View style={styles.detailsContainer}>
            {selectedData && Object.keys(selectedData).map((key, id) => (
              selectedData[key] &&
                <View key={id} style={styles.keyValueContainer}>
                  <Text style={styles.detailsTextKey}>{key}  :  <Text style={styles.detailsValueText}>{selectedData[key]}</Text></Text>
                </View>
              ))
            }
          </View>
          <View style={styles.detailsDeleteContainer1}>
            <TouchableOpacity style={styles.detailsDeleteContainer}
              onPress={()=>{setConfirmDelete(true),setIsVisible(false)}}
            >
              <Text style={styles.detailCloseContainerText}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.detailsCloseContainer}
                onPress={()=>{setIsVisible(false)}}
            >
              <Text style={styles.detailCloseContainerText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal isVisible={confirmDelete} onBackdropPress={()=>{setConfirmDelete(false)}}>
        <View style={styles.deleteConfirmContainer}>
          <TouchableOpacity height={hp(2)} onPress={()=>{setConfirmDelete(false)}} style={styles.closeIconContainer}>
            <AntDesign name='close' size={27} color='#004e92' />
          </TouchableOpacity>
          <View style={styles.deleteTextContainer}>
            <Text style={styles.deleteText}>Do you want to Delete?</Text>
          </View>
          <View style={styles.removeUserContainer}>
            <TouchableOpacity onPress={()=>{setConfirmDelete(false)}} style={styles.removeUserContainer1}>
              <Text style={styles.deleteUserConfirmText}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.removeUserContainer2}>
              <Text style={styles.deleteUserConfirmText}>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default SearchCustomer
