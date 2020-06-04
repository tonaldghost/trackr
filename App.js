import * as React from "react";
import { StyleSheet, View } from "react-native";
import { themes, ThemeContext } from "./theme/ThemeContext";

import HomePage from "./components/HomePage";

export default class App extends React.Component {
  state = {
    theme: themes.light
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
