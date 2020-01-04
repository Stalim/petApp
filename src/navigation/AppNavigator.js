import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login_SignUp_Navigator from './Login_SignUp_Navigator';

export default createAppContainer(
  createSwitchNavigator({

    Main: Login_SignUp_Navigator

  })
);
