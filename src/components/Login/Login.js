import React, { Component } from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView, StatusBar} from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar barStyle="dark-content"/>
        <View style={styles.logoContainer}>
          <Image
          style={styles.logo}
          source={require('../../.././Images/paw_logo.jpg')}
          />
          <Text style={styles.title}>No Humans Allowed</Text>
        </View>

        <View style={styles.formContainer}>
          <LoginForm />
        </View>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#0000',

  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent:'center',
    marginTop: 30

  },

  logo: {
    width: 140,
    height:140
  },

  title: {

    fontStyle: 'italic'
  },

  formContainer: {

  }
});
