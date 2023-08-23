import {View,Text,StyleSheet, Image,Animated, Easing} from 'react-native'
import React, { useState } from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';
import { COLORS, SIZES } from './src/constants/theme';
import Router from './src/router/router';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import signInScreen from './src/screens/signin/signInindex';

// import SignUpScreen from './src/screens/SignUp'
import { SignInScreen,SignUpScreen,ForgotPwdScreen,Email,Phone,ResetPwdScreen, Home } from './src/screens/main';



// import Tabs from './Navigation/tabs';




const slides =[
  {
    id:1,
    title:'Fastest Growing Social App',
    description:'Running your Social App is easier with Socially',
    image: require ('./src/assets/Wallet.png')
  
  },

  {
    id:2,
    title:'Secure Reliable Social App',
    description:'Running your Social App is easier with Socially',
    image: require ('./src/assets/Lock.png')
  
  },

  {
    id:3,
    title:'Manage Payments and Cashouts',
    description:'Running your Social App is easier with Socially',
    image: require ('./src/assets/icon.png')
  
  }
  
]

const Stack = createNativeStackNavigator();
const App = () =>{
  const [showHomePage,setShowHomePage] = useState(false);
  

  const buttonLabel = (label) =>{
    return(
      <View style={{
        padding:12
      }}>
        <Text style={{
          color:COLORS.title,
          fontWeight:'600',
            fontSize:SIZES.h4
        }}>
          {label}
        </Text>
      </View>
    )
  }

  
  if(!showHomePage){
    
      const translateYImage = new Animated.Value(40);
  
      Animated.timing(translateYImage,{
        toValue:0,
        duration:1000,
        useNativeDriver:true,
        easing:Easing.bounce,
      }).start();
    
    return(
      <AppIntroSlider
      data = {slides}
      renderItem={({item}) =>{
        
        return(
          
          <View style ={{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            alignItems:'center',
            padding:15,
            PaddongTop:100,
          }}>
           <Animated.Image
              source ={item.image} 
              style={[{
                width:SIZES.width - 80 ,
                height:400,
                transform:[
                  {
                    translateY:translateYImage,
                  }
                ]

              }]}
              resizeMode ="contain"
           />
           <Text style={{
            color:COLORS.black,
            fontWeight:'bold',
            padding:15,
            fontSize:SIZES.h1,
            textAlign:'center'

           }}>
            {item.title}
           </Text>

           <Text style ={{
            textAlign:'center',
            PaddongTop:5,
            color:COLORS.title

           }}>
            {item.description}
           </Text>

          </View>
        )
      }}
      activeDotStyle={{
        backgroundColor:COLORS.purple,
        width:30,
      }}
      
      renderNextButton={() =>buttonLabel("Next")}
      
      renderDoneButton={() =>buttonLabel("Done")}
      
     onDone={()=> {
      setShowHomePage(true);
     }}

      />
    )
      
    
  }
  return(
    // <SignUpScreen />
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='SignUpScreen'
      >
        <Stack.Screen
          name='SignUpScreen'
          component={SignUpScreen}
          options={{
            headerShown:false
          }}
        />

        <Stack.Screen
          name='SignInScreen'
          component={SignInScreen}
          options={{
            headerShown:false
          }}
        />

        <Stack.Screen
          name='ForgotPwdScreen'
          component={ForgotPwdScreen}
          options={{
            headerShown:false
          }}
        />

        <Stack.Screen
          name='Email'
          component={Email}
          options={{
            headerShown:false
          }}
        />

        <Stack.Screen
          name='Phone'
          component={Phone}
          options={{
            headerShown:false
          }}
        />

        <Stack.Screen
          name='ResetPwdScreen'
          component={ResetPwdScreen}
          options={{
            headerShown:false
          }}
        />

        <Stack.Screen
          name='Home'
          component={Home}
          options={{
            headerShown:false
          }}
        />

      </Stack.Navigator>

      
    </NavigationContainer>
  );
}

export default App;
