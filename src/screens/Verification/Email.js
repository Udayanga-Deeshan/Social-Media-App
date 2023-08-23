import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, SIZES} from '../../constants/theme';
import {TextInput} from 'react-native';
import VerificatioBox from '../../Components/VerificationBox';

const Email = ({navigation}) => {
  return (

    <VerificatioBox 

    />
   
    // <View style={styles.container}>
    //   <View>
    //     <Text style={styles.headerTitle}>Verify Email </Text>
    //   </View>
    //   <View>
    //     <Text style={styles.description}>
    //       We have sent a code to your email
    //     </Text>
    //   </View>

    //   <View style={styles.otpContainer}>
    //     <View style={styles.otpBox}>
    //       <TextInput
    //         style={styles.otpText}
    //         keyboardType="number-pad"
    //         maxLength={1}
    //       />
    //     </View>

    //     <View style={styles.otpBox}>
    //       <TextInput
    //         style={styles.otpText}
    //         keyboardType="number-pad"
    //         maxLength={1}
    //       />
    //     </View>
    //     <View style={styles.otpBox}>
    //       <TextInput
    //         style={styles.otpText}
    //         keyboardType="number-pad"
    //         maxLength={1}
    //       />
    //     </View>
    //     <View style={styles.otpBox}>
    //       <TextInput
    //         style={styles.otpText}
    //         keyboardType="number-pad"
    //         maxLength={1}
    //       />
    //     </View>
    //   </View>
      
    //     <TouchableOpacity
    //       style={styles.btn}

    //       onPress={()=>navigation.navigate("ResetPwdScreen")}
    //     >
    //       <Text style={styles.text}>Verify</Text>
    //     </TouchableOpacity>

    //     <TouchableOpacity
    //       style={styles.btn}

    //       // onPress={()=>navigation.navigate("Email")}
    //     >
    //       <Text style={styles.text}>Send Again</Text>
    //     </TouchableOpacity>
      
    // </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // alignItems: 'center',
//     paddingTop: 30,
//     paddingLeft: 10,
//     paddingRight: 10,
//     backgroundColor: COLORS.white,
//   },
//   headerTitle: {
//     alignSelf: 'center',
//     // alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: SIZES.h1,
//     color: COLORS.black,
//     paddingBottom: 10,
//   },
//   description: {
//     alignSelf: 'center',
//     fontSize: SIZES.h3,
//     color: COLORS.grey,
//     paddingBottom: 30,
//   },
//   otpContainer: {
//     marginHorizontal: 20,
//     marginBottom: 20,
//     // marginVertical:20,
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     flexDirection: 'row',
//     marginVertical: 20,
//   },
//   otpBox: {
//     borderRadius: 5,
//     borderColor: COLORS.purple,
//     borderWidth: 1,
//     padding: 5,
//   },
//   otpText: {
//     fontSize: SIZES.h2,
//     color: COLORS.black,
//     padding: 0,
//     textAlign: 'center',
//     paddingHorizontal: 18,
//     paddingVertical: 10,
//   },
//   btn: {
//     marginTop: 80,
//     backgroundColor: COLORS.purple,
//     paddingHorizontal: 140,
//     paddingVertical: 10,
//     borderRadius: 30,
    
//     // paddingBottom:20
//   },
//   text:{
      
//     color:COLORS.white,
//     fontWeight:'700',
//     alignSelf:'center'
//   }
// });
export default Email;
