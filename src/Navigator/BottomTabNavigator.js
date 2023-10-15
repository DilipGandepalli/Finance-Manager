import { Image, Text, View } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home/Home';
import AddCustomer from '../Screens/Add/AddCustomer';
import SearchCustomer from '../Screens/Search/SearchCustomer';
import Managebudget from '../Screens/Manage/Managebudget';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Debit from '../Screens/Debit/Debit';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const BottomTabNavigator = () => {
    const Tab= createBottomTabNavigator()
  return (
    <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
            tabBarStyle:{
                height:hp(7),
                alignItems:'center',
                paddingBottom:'1%',
                backgroundColor:'#fff',
                borderTopColor:"#D3D3D3",
                borderTopEndRadius:10,
                elevation:17
            
            },
            tabBarLabelPosition:'below-icon',
            tabBarHideOnKeyboard:true
            
        }}
        >
        <Tab.Screen
            name='Home'
            component={Home}
            options={{headerShown:false,
                tabBarLabel:({focused})=>(
                    <Text style={{
                        color:focused ? '#003492':'#6f91d1' ,
                        fontSize:RFPercentage(1.75),
                        fontWeight:focused ?'600' :'400',
                    }}>Home</Text>
                ),
                tabBarIcon:({focused})=>(
                    focused ?
                    <Image style={{height:hp(3),width:hp(3)}} source={require('../../assets/Icons/HomeIcon.png')}/> :
                    <Fontisto name="home" style= {{
                        color:focused ? '#000' : '#6f91d1',
                        fontSize:RFPercentage(2.5)
                    }}/>
                )
            }}
        />
         <Tab.Screen
            name='SearchCustomer'
            component={SearchCustomer}
            options={{headerShown:false,
                tabBarLabel:({focused})=>(
                    <Text style={{
                        color:focused ? '#003492':'#6f91d1' ,
                        fontSize:RFPercentage(1.75),
                        fontWeight:focused ?'600' :'400',
                    }}>Search</Text>
                ),
                tabBarIcon:({focused})=>(
                    focused ?
                    <Image style={{height:hp(3.25),width:hp(3.25)}} source={require('../../assets/Icons/personSearch.png')}/> :
                    <MaterialIcons name="person-search" style= {{
                        color:focused ? '#000' : '#6f91d1',
                        fontSize:RFPercentage(3.9)
                    }}/>
                )
            }}  
        />
         <Tab.Screen
            name=' '
            component={AddCustomer}
            options={{headerShown:false,
                tabBarIcon:({focused}) => (
                    <View style={{
                        height:focused ? hp(4.5) :hp(11),
                        width: focused ? hp(9) :hp(11),
                        justifyContent:focused ?'flex-start':'center',
                        alignItems:'center',
                        marginTop:focused ?'0%':'-40%',
                        borderRadius:focused ? 0:50,
                        borderWidth:focused ? 0 :2,
                        borderColor:focused?'':'#f2f2f2',
                        backgroundColor:focused?'#fff':'#f2f2f2',
                    }}>
                        { focused ? 
                            
                            <Image source={require('../../assets/Icons/plusIcon.png')} style={{height:hp(5.5),width:hp(5.5),marginTop:'2.5%'}}/>                
                           :
                            <AntDesign name="pluscircle" style= {{
                                color:focused?'#6f91d1' :'#003492',
                                fontSize:focused ? RFPercentage(6) :RFPercentage(9),
                                }}
                            />
                        }
                    </View>
                    
                ),
            }}  
        />
        <Tab.Screen
            name='Debit'
            component={Debit}
            options={{headerShown:false,
                tabBarLabel:({focused})=>(
                    <Text style={{
                        color:focused ? '#003492':'#6f91d1' ,
                        fontSize:RFPercentage(1.75),
                        fontWeight:focused ?'600' :'400',
                    }}>Debt</Text>
                ),
                tabBarIcon:({focused})=>(
                    focused ?
                    <Image style={{height:hp(3.5),width:hp(3.5)}} source={require('../../assets/Icons/debtIcon.png')}/> :
                    <FontAwesome6 name="file-invoice-dollar" style= {{
                        color:focused ? '#000' : '#6f91d1',
                        fontSize:RFPercentage(3)
                    }}/>
                )
            }}  
        />
        
        <Tab.Screen
            name='Manage'
            component={Managebudget}
            options={{headerShown:false,
                tabBarLabel:({focused})=>(
                    <Text style={{
                        color:focused ? '#003492':'#6f91d1' ,
                        fontSize:RFPercentage(1.7),
                        fontWeight:focused ?'600' :'400',
                    }}>Expanses</Text>
                ),
                tabBarIcon:({focused})=>(
                    focused ?
                    <Image style={{height:hp(3.5),width:hp(3.5)}} source={require('../../assets/Icons/piechart.png')}/> :
                    <FontAwesome6 name="chart-pie" style= {{
                        color:focused ? '#000' :'#6f91d1',
                        fontSize:RFPercentage(3)
                        
                    }}/>
                )
            }}  
        />

    </Tab.Navigator>
  )
}

export default BottomTabNavigator
