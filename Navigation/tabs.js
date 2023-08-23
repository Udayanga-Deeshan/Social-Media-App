// import React from 'react';
// import {View, Text} from 'react-native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {NavigationContainer} from '@react-navigation/native';
// import Home from '../src/screens/HomeMain';
// import MessageScreen from '../src/screens/MessagePage';
// import icons from '../src/constants/icons'



// const Tab = createBottomTabNavigator();
// const Tabs = () => {
  
//   return (
     
//     <Tab.Navigator
//     screenOptions={{
//         tabBarShowLabel:false,
//         tabBarStyle:{
//             position:'absolute',
//             bottom:0,
//             left:0,
//             right:0,
//             elevation:0,
//             backgroundColor:COLORS.white,
//             borderTopColor:"transparent",
//             height:100
//         }

//     }}
// >
//     <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//             headerShown: false,
//             tabBarIcon:({focused}) => <TabIcon focused={focused} icon={icons.home}/>
//         }}
//     />
//     <Tab.Screen
//         name="Message"
//         component={Home}
//         options={{
//             headerShown: false,
//             tabBarIcon:({focused}) => <TabIcon focused={focused} icon={icons.search}/>
//         }}
//     />
    
   
// </Tab.Navigator>
   
//   );
// };

// export default Tabs;
