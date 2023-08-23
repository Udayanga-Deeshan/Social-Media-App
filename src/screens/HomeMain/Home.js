import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import icons from "../../constants/icons"
import HomeTabScreen from '../HomeTabScreen';
import MessageScreen from '../MessagePage/Message';
import NotificationTab from '../NotificationTab';
import ProfileTabScreen from '../ProfileTabScreen';
import AddPostScreen from '../AddPostScreen';
import TabIcon from '../../Components/TabIcon';
import * as Icons from '../../constants/icons';
import Header from '../../Components/Header';
import Stories from '../../Components/Stories';
import Post from '../../Components/Post';
import {POSTS} from '../../constants/dummyData';

const Tab = createBottomTabNavigator();
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderTopWidth: 0,
          height: 80,
          display: 'flex',
        },
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeTabScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} source={Icons.homeIcon} />
          ),
        }}
        //   options={{
        //     tabBarIcon: ({ focused }) => (
        //       <TabIcon focused={focused} source={require("../../assets/icons/Messageicon.png")} />
        //     ),
        //   }}
      />

      <Tab.Screen
        name="MessageTab"
        component={MessageScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} source={Icons.MessageIcon} />
          ),
        }}
      />

      <Tab.Screen
        name="AddPostTab"
        component={AddPostScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} source={Icons.plus} />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationTab"
        component={NotificationTab}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} source={Icons.NotificationIcon} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileTabScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <TabIcon focused={focused} source={Icons.ProfileIcon} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Home = () => {
  return (
    <View style={{flex: 1}}>
      
      {TabNavigator()}
    </View>
  );
};

export default Home;
