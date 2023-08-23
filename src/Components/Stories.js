import React from "react";
import {View,Text,StyleSheet, ScrollView,Image} from 'react-native'
import { Users } from "../constants/dummyData";
import { COLORS } from "../constants/theme";



const Stories = () =>{
    return(
        <View style={{marginBottom:13,}}>
            <ScrollView  horizontal showsHorizontalScrollIndicator={false}>
                {Users.map((story,index) =>(
                    <View key={index} style={styles.storyContainer}>
                        <Image source ={{uri:story.image}} style={styles.story} />
                        <Text >
                            {story.user.length >8 ? story.user.slice(0,8).toLocaleLowerCase() + '...' : story.user.toLocaleLowerCase()}
                        
                        </Text>
                    </View>
                    
                ))}
            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create(
    {
        storyContainer:{
            alignItems:"center"
        },
        story:{
            width:70,
            height:70,
            borderRadius:50,
            marginLeft:6,
            borderWidth:3,
            borderColor:COLORS.purple
        }
    }
)

export default Stories