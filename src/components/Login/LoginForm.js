import React, { Component } from 'react';
import {StyleSheet, AsyncStorage, View, Alert,TextInput, Text, Image, KeyboardAvoidingView, TouchableOpacity, StatusBar } from 'react-native';
{/*const userInfo = {username:'admin', password:'lola'}*/}
import * as firebase from "firebase";


  var config = {
    apiKey: "AIzaSyCICFM-viU7aEhZoTVAzjF_nTlKLL5gMYA",
    authDomain: "petapp-8e90b.firebaseapp.com",
    databaseURL: "https://petapp-8e90b.firebaseio.com",
    projectId: "petapp-8e90b",
    storageBucket: "petapp-8e90b.appspot.com",
    messagingSenderId: "1043247261213",
    appId: "1:1043247261213:web:66dad83fee99021d7f88f4"
  };

  if (!firebase.apps.length) {
      firebase.initializeApp(config);
  }

export default class LoginForm extends Component {

constructor(props){
  super(props);
  this.state = {
    email:'',
    password:''
  };
}
LogIn = (email, password) => {
    try {
      firebase
         .auth()
         .signInWithEmailAndPassword(email, password)
         .then(res => {
             console.log(res.user.email);
             AsyncStorage.setItem('isLoggedIn', '1');
             this.props.navigation.navigate('Main');
      });
} catch (err) {
      console.error();
    }
  };


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
          placeholder="Email"
          placeholderTextColor='gray'

          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          onChangeText={email => this.setState({ email })}
          value={this.state.username}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor='gray'
          returnKeyType="go"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.LogIn(this.state.email, this.state.password)}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUpForm')}>
          <Text style={styles.signUpText}>New user? Register now</Text>
          </TouchableOpacity>

      </KeyboardAvoidingView>
    );
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
