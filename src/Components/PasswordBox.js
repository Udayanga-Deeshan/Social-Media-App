import React from "react";
import {View,Text,StyleSheet,TextInput,TouchableOpacity,Image} from 'react-native'
import { useState } from "react";
import { COLORS } from "../constants/theme";


const PasswordBox = (props) =>{
    const {placeholder_txt} = props
    const [isPasswordShown, setIsPasswordShown] = useState(false);

    return(
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
        <Image source ={require("../assets/images/Lock_icon.png")} style={{marginHorizontal:10}} />
        <TextInput
          placeholder={placeholder_txt}
          placeholderTextColor={COLORS.black}
          secureTextEntry={isPasswordShown}
          style={{
            width: '100%',
            
          }} />

        <TouchableOpacity
          onPress={() => setIsPasswordShown(!isPasswordShown)}
          style={{
            position: 'absolute',
            right: 12,
          }}>
          {isPasswordShown == true ? (
            <Image source={require("../assets/images/eyeOff.jpg")} size={24} color={COLORS.black} />
          ) : (
            <Image source={require("../assets/images/eye1.jpg")} size={24} color={COLORS.black} />
          )}
        </TouchableOpacity>
      </View>
    )

   
}

const styles= StyleSheet.create(
    {

    }
)
export default PasswordBox