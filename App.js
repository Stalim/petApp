import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, ActivityIndicator, StatusBar, AsyncStorage  } from 'react-native';

import AppNavigator from './src/navigation/AppNavigator';



export default class PetApp extends Component {
  render(){
    return(
      <AppNavigator/>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
