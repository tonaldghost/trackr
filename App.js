import * as React from "react";
import { StyleSheet, View } from "react-native";
import { themes, ThemeContext } from "./theme/ThemeContext";
import ThemeButton from "./components/ThemeButton";

import HomePage from "./components/HomePage";

// get theme provider working and add button to switch between themes.
// Then add fade in and out of each shadow button (with icon) - switch between sun and moon.

// style buttons and background better - also settle on style
// that many components actually needed?
// need sqlite for on device storage? no need for anything more fanciful. decide on that.

// decide on mvp functionality

export default class App extends React.Component {
  state = {
    theme: themes.dark
  };

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === themes.dark ? themes.light : themes.dark
    });
  };

  render() {
    console.log(this.state.theme);
    return (
      <View style={styles.container}>
        {/* <ThemeContext.Provider value={this.state.theme}> */}
        <HomePage />
        {/* </ThemeContext.Provider> */}
        <ThemeButton toggleTheme={this.toggleTheme} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
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
