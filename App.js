import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TransactionScreen from './screens/BookTransactionScreen';
import SearchScreen from './screens/SearchScreen';

export default class App extends React.Component{
  render(){
    return(
     
        <AppContainer/>
     
    )
  }
}

var TabNavigator = createBottomTabNavigator({
  Transaction: { screen: TransactionScreen },
  Search: { screen: SearchScreen }
})

const AppContainer = createAppContainer(TabNavigator);
