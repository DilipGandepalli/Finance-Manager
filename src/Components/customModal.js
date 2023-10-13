import { StyleSheet, View,TouchableOpacity, } from 'react-native'
import React from 'react';
import { heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen'
import Modal from "react-native-modal";
import AntDesign from 'react-native-vector-icons/AntDesign'


const AddCustomer = ({isVisible,closeModal}) => {

  return (
    <View style={{}}>
        <Modal isVisible={isVisible} isClosable={closeModal} >
          <View style={{height:hp(80),backgroundColor:'#fff',marginBottom:'18%',marginHorizontal:'2%',borderRadius:5}}>
            <TouchableOpacity height={hp(2)} onPress={closeModal} style={{alignSelf:'flex-end',padding:'2.5%'}}>
              <AntDesign
                name='close'
                size={30}
                color='#004e92'
              />
            </TouchableOpacity>
          </View>
        </Modal>
    </View>
  )
}

export default AddCustomer

const styles = StyleSheet.create({})