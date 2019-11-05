import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button } from 'react-native';

import Login from './src/components/Login/Login';
import SignUp from './src/components/Login/SignUp';
export default class PetApp extends Component {
  render(){
    return(
      <SignUp />
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
