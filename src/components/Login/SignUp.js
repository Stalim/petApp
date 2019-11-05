import React, { Component } from 'react';
import {StyleSheet, View, Image, Text, KeyboardAvoidingView, StatusBar} from 'react-native';
import SignUpForm from './SignUpForm';

export default class SignUp extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar barStyle="dark-content"/>
        <View style={styles.logoContainer}>
          <Image
          style={styles.logo}
          source={require('../../.././Images/ed.gif')}
          />

        </View>

        <View style={styles.formContainer}>
          <SignUpForm />
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
    marginTop: 30
  },

  logo: {
    width: 140,
    height:140
  },

});
