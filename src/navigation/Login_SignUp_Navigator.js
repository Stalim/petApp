import React from 'react';
import {View,Text, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';


import LoginForm from '../components/Login/LoginForm';
import SignUpForm from '../components/Login/SignUpForm';
import ProfileTab from '../components/Profile/ProfileTab';
import NewsTab from '../components/News/NewsTab';
import ChatTab from '../components/Chat/ChatTab';
import CameraTab from '../components/Camera/CameraTab';


const Login_SignUp_Navigator = createSwitchNavigator({

  LoginForm: LoginForm,
  SignUpForm: SignUpForm,

});

export default Login_SignUp_Navigator;
