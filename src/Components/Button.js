import React from "react";
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native'
import { COLORS } from "../constants/theme";

const Button = (props) =>{
    const {button_txt,onPress,backgroundColor,color,image,style,textstyle} = props

    // const buttonStyles = {
    //   ...styles.btn,...(backgroundColor && { backgroundColor })
    // }

    // if (flexDirection){
    //     buttonStyles.flexDirection=flexDirection;
    // }
return(
    <TouchableOpacity
          style={{...styles.btn,...(backgroundColor && { backgroundColor }),...style}}
           
          onPress={onPress}
         
          
        >
           {image && <Image source={image} style={styles.image} />} 
           
                <Text style={{...styles.text,...(color && {color}),...textstyle}}>{button_txt}</Text>
           
          
        </TouchableOpacity>
)
}

const styles = StyleSheet.create(
    {
        btn: {
            marginTop: 50,
            // backgroundColor: COLORS.purple,
            padding:20,
            // paddingHorizontal: 140,
            // paddingVertical: 20,
            borderRadius: 15,
            // flexDirection:'row'
            
            
            
            // paddingBottom:20
          },
          text:{
      
            // color:COLORS.white,
            fontWeight:'700',
            alignSelf:'center',
            justifyContent:'center',
            alignItems:"center"
          }
    }
)

export default Button