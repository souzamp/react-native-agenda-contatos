import React, {Component} from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';

import Login from './Login';

const MainNav = createStackNavigator(
{
    Login: {
        screen:Login,
        navigationOptions:{
            header: null
        }
    }
})

export default createAppContainer(MainNav);