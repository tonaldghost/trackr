import * as React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { themes, ThemeContext } from "./theme/ThemeContext";

import HomePage from "./components/HomePage";

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`
});

export default class App extends React.Component {
  state = {
    theme: themes.dark
  };

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark
    }));
  };

  render() {
    return (
      <View style={styles.container}>
        <ThemeContext.Provider value={this.state.theme}>
          <HomePage />
        </ThemeContext.Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
