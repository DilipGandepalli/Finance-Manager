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
                height:hp(8.5),
                alignItems:'center',
                paddingBottom:'1%',
                backgroundColor:'#fff',
                borderTopColor:"#D3D3D3",
                marginBottom:'2%',
                marginHorizontal:'2%',
                borderRadius:10,
                elevation:17
            
            },
            tabBarLabelPosition:'below-icon',
            
        }}
        >
        <Tab.Screen
            name='Home'
            component={Home}
            options={{headerShown:false,
                tabBarLabel:({focused})=>(
                    <Text style={{
                        color:focused ? '#003492':'#6f91d1' ,
                        fontSize:RFPercentage(1.9),
                        fontWeight:focused ?'600' :'400',
                    }}>Home</Text>
                ),
                tabBarIcon:({focused})=>(
                    focused ?
                    <Image style={{height:hp(3.75),width:hp(3.75)}} source={require('../../assets/Icons/HomeIcon.png')}/> :
                    <Fontisto name="home" style= {{
                        color:focused ? '#000' : '#6f91d1',
                        fontSize:RFPercentage(3)
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
                        fontSize:RFPercentage(1.9),
                        fontWeight:focused ?'600' :'400',
                    }}>Search</Text>
                ),
                tabBarIcon:({focused})=>(
                    focused ?
                    <Image style={{height:hp(4),width:hp(4)}} source={require('../../assets/Icons/personSearch.png')}/> :
                    <MaterialIcons name="person-search" style= {{
                        color:focused ? '#000' : '#6f91d1',
                        fontSize:RFPercentage(4.5)
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
                        height:hp(13),
                        width:hp(13),
                        justifyContent:'center',
                        alignItems:'center',
                        marginTop:'-50%',
                        borderRadius:50,
                        borderWidth:4,
                        borderColor:'#f2f2f2',
                        backgroundColor:'#f2f2f2',
                    }}>
                        <AntDesign name="pluscircle" style= {{
                            color:'#003492',
                            fontSize:RFPercentage(11),
                        }}/>
                    </View>
                    
                )

            }}  
        />
        <Tab.Screen
            name='Debit'
            component={Debit}
            options={{headerShown:false,
                tabBarLabel:({focused})=>(
                    <Text style={{
                        color:focused ? '#003492':'#6f91d1' ,
                        fontSize:RFPercentage(1.9),
                        fontWeight:focused ?'600' :'400',
                    }}>Debit</Text>
                ),
                tabBarIcon:({focused})=>(
                    focused ?
                    <Image style={{height:hp(4.5),width:hp(4.5)}} source={require('../../assets/Icons/debtIcon.png')}/> :
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
                        fontSize:RFPercentage(1.9),
                        fontWeight:focused ?'600' :'400',
                    }}>Expanses</Text>
                ),
                tabBarIcon:({focused})=>(
                    focused ?
                    <Image style={{height:hp(4),width:hp(4)}} source={require('../../assets/Icons/piechart.png')}/> :
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
