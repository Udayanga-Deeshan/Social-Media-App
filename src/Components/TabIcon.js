import React from 'react';
import { View,Image } from 'react-native';
import {COLORS} from "../constants/theme";

const TabIcon =({focused, source}) => {
    return(
        <View
            style={{
                alignItems:'center',
                justifyContent:'center',
                height:80,
                width:50,
            }}
        >
            <Image
                source={source}
                resizeMode='contain'
                style={{
                    width:30,
                    height:30,
                    tintColor: focused? COLORS.purple : COLORS.lightGrey
                }}
            />

            {focused &&
                <View
                    style={{
                        position:'absolute',
                        left:0,
                        right:0,
                        bottom:0,
                        height:5,
                        borderTopLeftRadius:5,
                        borderTopRightRadius:5,
                        backgroundColor:COLORS.purple
                        
                    }}
                />
            }

        </View>
    )
}

export default TabIcon;