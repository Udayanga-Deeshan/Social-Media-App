import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable
  
} from 'react-native';
import {useState} from 'react';
import {SIZES} from '../../constants/theme';
import {COLORS} from '../../constants/theme';
import Icon from 'react-native-ionicons';
import { SignUpScreen } from '../main';
import Button from '../../Components/Button';






const SignInScreen = ({navigation}) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  return (
    <View style={{flex:1, marginHorizontal: 22, padding: 10, }}>
      <View>
      <Text
        style={{
          padding: 10,
          paddingTop: 60,
          fontSize: SIZES.h1,
          fontWeight: 'bold',
          marginVertical: 12,
          color: "#323142",
          paddingBottom:30,
          fontFamily:'Poppins-SemiBold'
          
        }}>
        Login Your {'\n'}Account
      </Text>
      </View>

      {/* <View
      style={{
           width: '100%',
           height: 48,
           borderColor: COLORS.black,
           borderWidth: 1,
           borderRadius: 8,
           alignItems: 'center',
           justifyContent: 'center',
           paddingLeft: 22,
           marginBottom:25
         }}>
         <TextInput
          placeholder="Enter your Full Name"
          placeholderTextColor={COLORS.black}
          keyboardType="default"
          style={{
            width: '100%',
          }} />
      </View> */}

      <View
      style={styles.inputContainer}>
        
        
        <Image source={require("../../assets/images/Email_icon.png")} style={styles.image} />
          
         <TextInput
         
          placeholder="Enter your Email Address"
          placeholderTextColor={COLORS.whitesmoke}
          keyboardType="email-address"
          style={{
            width: '100%',
            marginHorizontal:20,
            color:COLORS.purple
            
            
          }} />
          
      </View>

      <View
        style={{
          flexDirection:'row',
          width: '100%',
          height: 48,
          borderColor: COLORS.white,
          borderWidth: 1,
          borderRadius: 15,
          alignItems: 'center',
          // justifyContent: 'center',
          paddingLeft: 22,
          
          backgroundColor:COLORS.white
          
        }}>

          <Image source ={require("../../assets/images/Lock_icon.png")} style={{marginHorizontal:10}} />
        <TextInput
          placeholder="Enter your password"
          placeholderTextColor={COLORS.whitesmoke}
          secureTextEntry={isPasswordShown}
          style={{
            width: '100%',
            paddingLeft:15,
            color:COLORS.purple
            
          }} />

        <TouchableOpacity
          onPress={() => setIsPasswordShown(!isPasswordShown)}
          style={{
            position: 'absolute',
            right: 12,
          }}>
          {isPasswordShown == true ? (
            <Image source={require("../../assets/images/eyeOff.jpg")} size={24} color={COLORS.black} />
          ) : (
            <Image source={require("../../assets/images/eye1.jpg")} size={24} color={COLORS.black} />
          )}
        </TouchableOpacity>
      </View>

      <View style={{marginRight:-3,paddingTop:5}}>
        <Pressable
          onPress={()=>navigation.navigate("ForgotPwdScreen")}
        >
             <Text style={{color:COLORS.black,alignSelf:'flex-end'}}>Forgot Password ?</Text>
        </Pressable>
       
      </View>
      
      <View style={{paddingTop:5}}>
        {/* <Button  
          title="Login"
         
          style={{
            paddingTop: 5,
            marginBottom: 4,
            alignItems: 'center',
            borderRadius: 12,
            borderWidth: 2,
            justifyContent: 'center',
            
            // height:300,
            // width:150
            
            
          }} /> */}
          <Button button_txt={'Login'} backgroundColor={COLORS.purple} color={COLORS.white} onPress={()=>navigation.navigate('Home')}/>
    </View>

    <View style={
      {
        flexDirection:'row',
        justifyContent:'center',
        marginVertical:35,

      }
    }>
      <Text style={{fontSize:16,color:COLORS.black,}}>Create New Account?</Text>
      <Pressable
        onPress={()=>navigation.navigate("SignUpScreen")}

      >
        <Text style={
          {
            fontSize:16,
            color:COLORS.purple,
            fontWeight:'bold',
            marginLeft:6
          }
        }>Sign up</Text>

      </Pressable>
    </View>

    <View style={{flexDirection:'row',alignItems:'center',marginVertical:20,}}>
      <View
        style={{
          flex:1,
          height:1,
          backgroundColor:COLORS.grey,
          marginHorizontal:10
        }}
      />

      <Text style={{fontSize:14,padding:20}}> Continue with Accounts</Text>
      <View
        style={{
          flex:1,
          height:1,
          backgroundColor:COLORS.grey,
          marginHorizontal:10
        }}
      />

    </View>

    <View style ={
      {
        flexDirection:'row',
        justifyContent:'center',

      }}>

        <TouchableOpacity
          onPress={()=>console.log("pressed")}
          style={
            {
              flex:1,
              alignItems:'center',
              justifyContent:'center',
              flexDirection:'row',
              height:52,
              borderWidth:1,
              borderColor:COLORS.grey,
              marginRight:4,
              borderRadius:2,
              backgroundColor:'#ff362b34'
            }
          }
        >
            {/* <Image
              source={require("../../assets/facebook.png")}
              style={
                {
                  height:36,
                  width:36,
                  marginRight:8
                }
              }
              resizeMode='contain'
            /> */}

            <Text style={{color:"#D44638",fontWeight:'bold',fontFamily:'FuzzyBubbles-Regular'}}>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={()=>console.log("pressed")}
          style={
            {
              flex:1,
              alignItems:'center',
              justifyContent:'center',
              flexDirection:'row',
              height:52,
              borderWidth:1,
              borderColor:COLORS.grey,
              marginRight:4,
              borderRadius:2,
              backgroundColor:"#b5c4e3"
            }
          }
        >
            {/* <Image
              source={require("../../assets/google.png")}
              style={
                {
                  height:36,
                  width:36,
                  marginRight:8
                }
              }
              resizeMode='contain'
            /> */}

            <Text style={{color:"#4267b2",fontWeight:'bold'}}>Facebook</Text>
        </TouchableOpacity>

    </View>
      
    </View>
      
      
      
   
        
   
    
  );
};

const styles = StyleSheet.create({
  inputContainer:{
          flexDirection:"row",
           width: '100%',
           height: 48,
           borderColor: COLORS.white,
           borderWidth: 1,
           borderRadius: 15,
          //  alignItems: 'center',
          //  justifyContent: 'center',
           paddingLeft: 22,
           marginBottom:25,
           backgroundColor:COLORS.white
  },
  image:{
    marginLeft:20,
    // marginVertical:20
    // alignContent:'flex-start',
    marginTop:15,
    marginLeft:5,
    
    // justifyContent:'center'
  },
  breakWord:{
    flexWrap:'wrap'
  }
});

export default SignInScreen;
