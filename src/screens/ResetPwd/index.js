import React from 'react';
import {View, Text, StyleSheet,TextInput,TouchableOpacity,Image} from 'react-native';
import {COLORS, SIZES} from '../../constants/theme';
import {useState} from 'react';
import PasswordBox from '../../Components/PasswordBox';
import Button from '../../Components/Button';


const ResetPwdScreen = () => {

  const {container,headerWrapper,textbox} = styles
    
  return (
    <View style={container}>
      <View>
        <Text style={headerWrapper}>Reset Your Password</Text>
      </View>

      
      <View >
        <PasswordBox placeholder_txt={'Enter the New Password'} />
        </View>
        <View style={textbox}>
        <PasswordBox placeholder_txt={'confirm Password'} />
        </View>

        <Button button_txt={'Reset'} backgroundColor={COLORS.purple}
        color={COLORS.white} />
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 22,
    padding: 10,
  },
  headerWrapper: {
    padding: 10,
    paddingTop: 70,
    fontSize: SIZES.h1,
    fontWeight: 'bold',
    marginVertical: 12,
    color: COLORS.black,
    paddingBottom: 20,
  },
  textbox:{
    paddingTop:30
  }
});
export default ResetPwdScreen;
