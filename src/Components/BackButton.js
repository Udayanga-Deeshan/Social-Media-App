import React from "react";
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native'


const BackButton = ({onPress}) =>{
    return(
        <View>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Image source={require("../assets/images/BackBtn.png")} style={styles.backIcon}/>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create(
    {
        button: {
            position:'absolute',
            top:8,
            left:-4,
            // padding:3,
            borderRadius: 5,
            
          },
          backIcon: {
            width:70,
            height:60,
            padding:10
             
          },
    }
)

export default BackButton