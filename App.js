import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button } from 'react-native';

import SignUpForm from './src/components/Login/SignUpForm';
import LoginForm from './src/components/Login/LoginForm';
import ImagePicker from './src/components/Login/ImagePicker';
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
