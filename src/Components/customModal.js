import { StyleSheet, View,TouchableOpacity, Text, } from 'react-native'
import React from 'react';
import { heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen'
import Modal from "react-native-modal";
import AntDesign from 'react-native-vector-icons/AntDesign'


const CustomModal = ({isVisible,closeModal,height}) => {

  return (
    <View style={{}}>
        <Modal isVisible={isVisible} isClosable={closeModal} onBackdropPress={closeModal}>
          <View style={{height:hp(height),backgroundColor:'#fff',marginHorizontal:'5%',borderRadius:5,marginBottom:'12%'}}>
            <TouchableOpacity height={hp(2)} onPress={closeModal} style={{alignSelf:'flex-end',padding:'2.5%'}}>
              <AntDesign
                name='close'
                size={30}
                color='#004e92'
              />
              <Text>Hello Dilip</Text>
            </TouchableOpacity>
          </View>
        </Modal>
    </View>
  )
}

export default CustomModal

const styles = StyleSheet.create({})