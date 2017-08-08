import React from 'react';
import PropTypes from 'prop-types';

import { Text, TextInput, Dimensions, StyleSheet, Image, View } from 'react-native';
const styles = StyleSheet.create({
  container: {
padding:10,
flex:1,
  },
img: {
width: 200, height: 100
  },

});
const Img = (props) => {
let windowWidth = Dimensions.get('window').width;
return ( 
 <View style={styles.container} >
 <Text>{props.img.image}</Text>
 <Image
          style={{width:windowWidth-20, height: windowWidth/4}}
          source={{uri: 'http://192.168.43.104:3000/public/'+props.img.image}}
        />
  </View> 
)
};


export default Img
