import React from 'react';
import {View,Text, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack'

import LoginForm from '../components/Login/LoginForm';
import SignUpForm from '../components/Login/SignUpForm';



const Login_SignUp_Navigator = createStackNavigator({

  LoginForm: LoginForm,
  SignUpForm: SignUpForm,

});

export default Login_SignUp_Navigator;
