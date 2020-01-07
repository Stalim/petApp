import React, { Component } from 'react';
import {StyleSheet, AsyncStorage, View, Alert,TextInput, Text, Image, KeyboardAvoidingView, TouchableOpacity, StatusBar } from 'react-native';

const userInfo = {username:'admin', password:'lola'}

export default class LoginForm extends Component {

constructor(props){
  super(props);
  this.state = {
    username:'',
    password:''
  }
}


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

        <TextInput
          style={styles.input}
          placeholder="Username or email"
          placeholderTextColor='gray'
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor='gray'
          returnKeyType="go"
          ref={(input) => this.passwordInput = input}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress = {this._login}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUpForm')}>
          <Text style={styles.signUpText}>New user? Register now</Text>
          </TouchableOpacity>

      </KeyboardAvoidingView>
    );
  }

  _login = async() => {
    if(userInfo.username === this.state.username && userInfo.password === this.state.password){
      await AsyncStorage.setItem('isLoggedIn', '1');
      this.props.navigation.navigate('Main');
    }
    else {
      alert('Incorrect Password ');
    }

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 160,
    paddingHorizontal:50,
    alignItems: 'center',
  },

  input: {
    shadowOffset:{  width: 5,  height: 10,  },
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    borderBottomWidth: 1,
    borderColor: 'black',
    height: 40,
    marginBottom: 20,
    borderRadius: 8,
    paddingLeft:5,
    fontStyle:'italic',
    width:300
  },

  buttonContainer: {
    backgroundColor: 'green',
    paddingVertical: 10,
    width: 80,
    borderRadius: 4,

  },

  buttonText: {
    textAlign:'center',
    color:'white'
  },

  signUpText:{
      paddingVertical: 15,
      color: 'blue',
  },

  logo: {
    width: 140,
    height:140
  },

  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent:'center',
    marginTop: 30

  },
});
