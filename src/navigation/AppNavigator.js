import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {StyleSheet, Text, View, Button, ActivityIndicator, StatusBar, AsyncStorage  } from 'react-native';

import Login_SignUp_Navigator from './Login_SignUp_Navigator';
import Home_Tab_Navigator from './Home_Tab_Navigator';

{/*class AuthLoadingScreen extends Component {
  constructor(props){
    super(props);
    this._loadData();
    this.state = {
      isLoaded:false,
      email:"Lola",
  };
  }
  render(){
    return(
      <View style={styles.container}>
        <ActivityIndicator/>
        <StatusBar barStyle="default"/>
      </View>
    );
  }

  _loadData = async() => {
    const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
    this.props.navigation.navigate((isLoggedIn !== '1' ? 'Login' : 'Profile'), {email: this.state.email });


  }
}*/}

export default createAppContainer(
  createSwitchNavigator({
    /*AuthLoading: AuthLoadingScreen,*/
    Login: Login_SignUp_Navigator,
    Main: Home_Tab_Navigator
  },
  {
    initialRouteName: 'Login',
  }
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
