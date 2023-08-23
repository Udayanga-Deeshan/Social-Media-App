import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';

import {SIZES, COLORS} from '../../constants/theme';
import Button from '../../Components/Button';
import MyImage from '../../assets/images/Email.png'
import PhoneImage from '../../assets/images/phone.png'
import BackButton from '../../Components/BackButton';

const ForgotPwdScreen = ({navigation}) => {
  const handleBackPress = () =>{
    navigation.goBack();
  }
  return (
    <View style={{flex: 1, marginHorizontal: 22, padding: 10,marginVertical:10}}>
    <BackButton onPress={handleBackPress}/>
      
      <View>
        <Text
          style={{
            padding: 10,
            paddingTop: 50,
            fontSize: SIZES.h1,
            fontWeight: 'bold',
            marginVertical: 12,
            color: COLORS.black,
            paddingBottom: 10,
            marginVertical:20
          }}>
          Forget Password
        </Text>
      </View>
      <View
        style={{
          color: COLORS.grey,
          fontWeight:'300'
        }}>
        <Text>
          Select Which contact details should we use to reset your Password
        </Text>
      </View>

      {/* <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Email')}
        
      >
        <Text style={styles.text}>Email</Text>
        
      </TouchableOpacity> */}
      <Button 
      //  onPress={() => navigation.navigate('Email')}
        button_txt={"Email"}
        backgroundColor={COLORS.white}
        color={COLORS.black}
        image={MyImage}
        style={{
          flexDirection:"row",
          padding:10
          
          
          
          // marginVertical:5
        }}
        textstyle={{
          paddingHorizontal:10
        }}
       
        
      />
      <View style={{paddingTop:0}}>
      <Button 
      //  onPress={() => navigation.navigate('Phone')}
        button_txt={"Phone"}
        backgroundColor={COLORS.white}
        color={COLORS.black}
        image={PhoneImage}
        style={{
          flexDirection:"row",
          padding:10
          
          
          
          // marginVertical:5
        }}
        textstyle={{
          paddingHorizontal:10
        }}
       
        
      />

      <Button 
        onPress={()=>navigation.navigate('Email')}
        button_txt={"Next"}
        backgroundColor={COLORS.purple}
        color={COLORS.white}
      />
      </View>
      

      {/* <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Phone')}>
        <Text style={styles.text}>Phone</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginTop: 80,
    backgroundColor: COLORS.purple,
    paddingHorizontal: 140,
    paddingVertical: 10,
    borderRadius: 30,
  },
  text: {
    color: COLORS.white,
    fontWeight: '700',
  },
});
export default ForgotPwdScreen;
