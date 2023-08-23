import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import * as Icons from '../constants/icons';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={Icons.Logo} />
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image source={Icons.setting} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Icons.search} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: 'center',
  },
  iconsContainer: {
    flexDirection: 'row',
    
    
  },
  icon:{
    marginRight:10
  }
});
export default Header;
