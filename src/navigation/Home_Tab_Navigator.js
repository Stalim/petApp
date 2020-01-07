import React from 'react';
import {View,Text, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';



import ProfileTab from '../components/Profile/ProfileTab';
import NewsTab from '../components/News/NewsTab';
import ChatTab from '../components/Chat/ChatTab';
import CameraTab from '../components//Camera/CameraTab';



const Home_Tab_Navigator = createBottomTabNavigator({

  Home: {
      screen: NewsTab,
      navigationOptions: {
        tabBarIcon: ({tintColor}) =>
          <Icon name="home" size={30} color={tintColor} />
      }
    },
  Profile: {
      screen: ProfileTab,
      navigationOptions: {
        tabBarIcon: ({tintColor}) =>
          <Icon name="paw" size={30} color={tintColor} />
      }
    },
  Chat: {
      screen: ChatTab,
      navigationOptions: {
        tabBarIcon: ({tintColor}) =>
          <Icon name="comment" size={30} color={tintColor} />
      }
    },
  Camera: {
      screen: CameraTab,
      navigationOptions: {
        tabBarIcon: ({tintColor}) =>
          <Icon name="camera" size={30} color={tintColor} />
      }
    },

},
{
    tabBarOptions: {
      showLabel: false
    }
  }
);


export default Home_Tab_Navigator;
