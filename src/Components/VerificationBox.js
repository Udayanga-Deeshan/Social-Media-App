import React from "react";
import {View,Text,StyleSheet,Dimensions,TextInput} from 'react-native'
import { COLORS,SIZES } from "../constants/theme";
import VerifyButton from "./VerifyButton";
import { useNavigation } from "@react-navigation/native";


const VerificatioBox = () =>{
    const navigation = useNavigation();
 return(
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Verify Email</Text>
        <View>
          <Text style={styles.description}>
            We have sent a code to your Phone Number
          </Text>
        </View>

        <View>
            <Text style={{color:COLORS.grey}}>Joseph---Mail.com</Text>
        </View>

        <View style={styles.otpContainer}>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
          />
        </View>

        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
          />
        </View>
        <View style={styles.otpBox}>
          <TextInput
            style={styles.otpText}
            keyboardType="number-pad"
            maxLength={1}
          />
        </View>
      </View>

      
      
       

        <VerifyButton
            
            title={'Verify'}
            style={{
                paddingHorizontal:100,
                backgroundColor:COLORS.purple
            }}
            onPress={() => navigation.navigate('ResetPwdScreen')}
        />

        <VerifyButton
            title={'Send Again'}
            style={{
                paddingHorizontal:80,
                backgroundColor:COLORS.purple
            }}
        />

       
      </View>
    </View>
 )
}

const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  box: {
    backgroundColor: 'white',
    width: Dimensions.get('window').width * 0.8,
    height: windowHeight * 0.6,
    padding: 20,
    borderRadius: 10,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight:'bold'
  },
 
  description: {
    alignSelf: 'center',
    fontSize: SIZES.h6,
    color: COLORS.grey,
    paddingBottom: 30,
    fontWeight:"500"
  },
  otpContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    // marginVertical:20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    
  },
  otpBox: {
    width:50,
    height:50,
    borderRadius: 10,
    borderColor: COLORS.purple,
    borderWidth: 1,
    padding: 2,
    marginHorizontal:10,
    marginVertical:10
  },
  otpText: {
    fontSize: SIZES.h2,
    color: COLORS.black,
    padding: 0,
    textAlign: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

export default VerificatioBox