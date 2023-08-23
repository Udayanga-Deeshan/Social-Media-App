import React from "react";
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import { COLORS } from "../constants/theme";

const VerifyButton = ({title,style,onPress}) =>{
    
    return(
        <View>
            <TouchableOpacity style={{...styles.button,...style}} onPress={onPress}>
                {/* onPress={onPress} */}
          <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        button: {
    
            // backgroundColor: COLORS.purple,
            paddingVertical: 15,
            // paddingHorizontal: 100,
            borderRadius: 10,
            marginTop:30
            
          },
          buttonText: {
            color: 'white',
            fontWeight: 'bold',
            
          },
    }
)

export default VerifyButton