/*This works better with the app of EXPO*/
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Platform,
} from 'react-native';
import call from 'react-native-phone-call'

export default class App extends Component {
  iosCall = () => {
    const args = {
      number:"*", 
      /*These don't work right now. look below*/
      /*you can type in any number you wish to try out*/
      prompt: false, 
    };

    call(args).catch(console.error);
  };
  dialCall = () => {
    let phoneNumber = '';

    if (Platform.OS === 'android') {
      var num = '*';
      /*These don't work right now. look below*/
      /*you can type in any number you wish to try out*/
      phoneNumber = 'tel:${' + num + '}';
    } else {
      phoneNumber = 'telprompt:${' + num + '}';
    }

    Linking.openURL(phoneNumber);
  };

  render() {
    return (
      <View style={{justifyContent:'center',alignItems:'center', flex:1}}>
      <Text style={{fontWeight:"bold",fontSize:20,}}> Phone Calling with React Native </Text>
        <TouchableOpacity
          onPress={this.dialCall}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.textStyle}>Method 1</Text>
        </TouchableOpacity>
         <TouchableOpacity
          onPress={this.iosCall}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.textStyle}>Method 2</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  button: {
    width: '80%',
    padding: 6,
    backgroundColor: '#bbf',
    borderRadius: 15,
    marginTop:10
  },

  textStyle:{
    fontWeight:"bold",
    textAlign:"center",
  }
});
