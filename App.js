import "react-native-gesture-handler";
import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import { MyProvider, MyContext } from "./theme/ThemeContext";

import HomeScreen from "./screens/HomeScreen";

import Navigator from "./routes/homeStack";

// decide on mvp functionality - that many components actually needed?
// upgrade / do whatever needed to be able to use new react navigation

// Add fade in and out of each shadow button (with icon) - switch between sun and moon. (icons must switch color too)
// Add navigation to each page.

// style buttons and background better - also begin creating style themes so a user can
// cycle through many quality themes.

// MVP TO INCLUDE:
// --> (Dark/Light/Hippie/Pink)
// --> React navigation to switch screens
// --> Async storage to store data for stackr and also theme chosen
// --> Refactor to use hooks

//CHANGES
// HOPMENAV IS COMPONENT FOR HOMESCREEN √
// CREATE HOMESCREEN IN SCREENS √
// ADD OTHER SCREENS IN THERE. √
// APP.JS ONLY HOLDS NAVIGATION AND WRAPS PROVIDER? X

export default class App extends React.Component {
  state = {};

  render() {
    return (
      <MyProvider>
        <HomeScreen />
      </MyProvider>
    );
  }
}
