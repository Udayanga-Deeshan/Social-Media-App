import React from "react";
import {View,Text,StyleSheet,Dimensions,Image} from 'react-native'
import { COLORS } from "../constants/theme";

const Post = ({post}) =>{
    return(
        <View style={styles.container}>
            <PostHeader post ={post} />
        </View>
    )
}

const PostHeader = ({post}) =>{
    return(
        <View style={{flexDirection:'row',justifyContent:"space-between",margin:5,alignItems:"center"}}>
        <View>
            <Image source={{uri:post.profile_picture}} style={styles.story} />
            
        </View>
    </View>
    )
    
}

const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create(
    {
        container:{
            backgroundColor:COLORS.white,
            width:Dimensions.get('window').width * 0.8,
            height: windowHeight * 0.4,
            alignSelf:'center',
            marginTop:20,
            borderRadius:20,
            marginBottom:2
            
        },
        story:{
            width:35,
            height:35,
            borderRadius:50,
            marginLeft:6,
            borderWidth:2,
            
        }
    }
)


export default Post