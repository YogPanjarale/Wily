import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createAppContainer } from 'react-navigation'
//local
import searchScreen from './screens/searchScreen';
import transactionsScreen from './screens/transactionsScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';


export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction: { screen: transactionsScreen },
  Search: { screen: searchScreen },
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        //console.log(routeName)
        if (routeName === "Transaction") {
          return (
            <Image
              source={require("./assets/book.png")}
              style={{ width: 30, height: 30 }}
            />
          )

        }
        else if (routeName === "Search") {
          return (
            <Image
              source={require("./assets/searchingbook.png")}
              style={{ width: 30, height: 30 }}
            />)

        }
      }
    })
  }
);
const AppContainer = createAppContainer(TabNavigator);