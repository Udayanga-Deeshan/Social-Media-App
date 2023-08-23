import React from 'react';
import {View,ScrollView} from 'react-native';
import Header from '../Components/Header';
import Stories from '../Components/Stories';
import Post from '../Components/Post';
import {POSTS} from '../constants/dummyData';

const HomeTabScreen = () => {
  return (
    <View>
      <Header />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeTabScreen;
