import { StyleSheet, View,StatusBar,Text,Image,Switch,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import GlobalHeader from '../../Components/GlobalHeader'
import { RFPercentage } from 'react-native-responsive-fontsize'
import {LinearGradient} from 'react-native-linear-gradient'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { totalExpanses,totalInvestment } from '../../modules/Home/Actions'
import { useSelector,useDispatch } from 'react-redux'


const styles = StyleSheet.create({
  mainContainer:{
    flex:1
  },
  portfolioContainer:{
    flex:0.325,
    margin:'2%',
    borderRadius:7,
    paddingHorizontal:'3%'
  },
  portfolioTextContainer:{
    flex:0.2,
    justifyContent:'flex-end',
    paddingLeft:'2%'
  },
  portFolioText:{
    color:'#f5f9fc',
    fontSize:RFPercentage(3),
    fontWeight:'500'
  },
  investLoanContainer:{
    flex:0.325,
    flexDirection:'row'
  },
  investmentContainer:{
    flex:0.5,
    flexDirection:'row',
    borderRightWidth:0.2,
    borderRightColor:'#D3d3d3',
    marginVertical:'2.75%'
  },
  investImageContainer:{
    flex:0.275, 
    borderRightWidth:2,
    borderRightColor:'#ACB6E5',
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center',
    marginVertical:'4%'
  },
  imageHeight:{
    height:hp(5),
    width:hp(5.5),
    tintColor:'#f3f3f3'
  },
  investTextContainer:{
    flex:0.725,
    flexDirection:'column',
    justifyContent:'center',
    paddingLeft:'4%'
  },
  investText:{
    color:'#ebe8e8',
    fontSize:RFPercentage(2),
    fontWeight:'400'
  },
  loanContainer:{
    flex:0.5,
    flexDirection:'row',
    marginVertical:'2.75%',
    marginLeft:'2.5%'
  },
  loanImageContainer:{
    flex:0.275, 
    borderRightWidth:2,
    borderRightColor:'#ACB6E5',
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center',
    marginVertical:'4%',
    paddingRight:'2%'
  },
  loanImg:{
    height:hp(5.5),
    width:hp(5.5),
    tintColor:'#f2f2f2'
  },
  loanTextContainer:{
    flex:0.725,
    flexDirection:'column',
    justifyContent:'center',
    paddingLeft:'4%'
  },
  monthIncText:{
    color:'#ebe8e8',
    fontSize:RFPercentage(1.75),
    fontWeight:'400'
  },
  expansesImgContainer:{
    flex:0.275, 
    borderRightWidth:2,
    borderRightColor:'#ACB6E5',
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center',
    marginVertical:'4%',
    paddingRight:'2%'
  },
  expansesContainer:{
    flex:0.5,
    flexDirection:'row',
    marginVertical:'2.75%',
    marginLeft:'3%'
  },
  expansesImgHeight:{
    height:hp(5),
    width:hp(5),
    tintColor:'#f2f2f2'
  },
  switchButtonContainer:{
    flex:0.15,
    marginBottom:'2%',
    marginRight:'3%',
    transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
    height:hp(5),
    width:hp(7),
    alignSelf:'flex-end'
  }
});

const Home = () => {

  const dispatch = useDispatch();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled)
  };

  const investmentData = useSelector((state)=> state.Home.investment);

  return (
    <View style={styles.mainContainer}>
      <GlobalHeader name={'Dilip'} showDate/>
      <StatusBar 
        backgroundColor='#000'
        barStyle='light-content'
        animated={true}
      />
      <LinearGradient 
       start={{y: 1, x: 0.3}} 
       end={{x: 1, y: 0.2}} 
       colors={['#355C7D','#6C5B7B','#C06C84']}
       style={styles.portfolioContainer}
      > 
          <TouchableOpacity onPress={()=>{dispatch(totalInvestment(20000))}} style={styles.portfolioTextContainer}>
            <Text style={styles.portFolioText}>
              My Portfolio 💰
            </Text>
          </TouchableOpacity>

          <View style={styles.investLoanContainer}>
            <View style={styles.investmentContainer}>
              <View style={styles.investImageContainer}>
                <Image source={require('../../../assets/Icons/investment2.png')} style={styles.imageHeight}/>
              </View>
              <View style={styles.investTextContainer}>
                <Text style={{color:'#e9f0f7',fontSize:isEnabled ? RFPercentage(2.75):RFPercentage(2.5),fontWeight:'600'}}>
                  ₹ {isEnabled ? '24,00,000' : 'XX,XX,XXX'}
                </Text>
                <Text style={styles.investText}>
                  Investment.
                </Text>
              </View>
            </View>
            <View style={styles.loanContainer}>
              <View style={styles.loanImageContainer}>
                <Image source={require('../../../assets/Icons/loanDebt.png')} style={styles.loanImg}/>
              </View>
              <View style={styles.investTextContainer}>
                <Text style={{color:'#e9f0f7',fontSize:isEnabled ? RFPercentage(2.75):RFPercentage(2.5),fontWeight:'500'}}>
                  ₹ {isEnabled ? '16,45,000' : 'XX,XX,XXX'}
                </Text>
                <Text style={styles.investText}>
                  Loan & Debt.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.investLoanContainer}>
            <View style={styles.investmentContainer}>
              <View style={styles.loanImageContainer}>
                <Image source={require('../../../assets/Icons/monthlyIncome.png')} style={styles.imageHeight}/>
              </View>
              <View style={styles.investTextContainer}>
                <Text style={{color:'#e9f0f7',fontSize:isEnabled ? RFPercentage(2.75):RFPercentage(2.5),fontWeight:'500'}}>
                ₹ {isEnabled ? '56,000' : 'XX,XXX'}
                </Text>
                <Text style={styles.monthIncText}>
                  Monthly Income
                </Text>
              </View>
            </View>
            <View style={styles.expansesContainer}>
              <View style={styles.expansesImgContainer}>
                <Image source={require('../../../assets/Icons/expanses.png')} style={styles.expansesImgHeight}/>
              </View>
              <View style={styles.investTextContainer}>
                <Text style={{color:'#e9f0f7',fontSize:isEnabled ? RFPercentage(2.75):RFPercentage(2.5),fontWeight:'500'}}>
                ₹ {isEnabled ? '32,000' : 'XX,XXX'}
                </Text>
                <Text style={styles.monthIncText}>
                  Expanses
                </Text>
              </View>
            </View>
            
            
          </View>

          <View style={styles.switchButtonContainer}>
            <Switch
              trackColor={{false: '#1a2a6c', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#302b63' : '#f4f3f4'}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

      </LinearGradient>
    </View>
    
  )
}

export default Home
