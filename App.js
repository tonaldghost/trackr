import * as React from "react";
import { StyleSheet, View, Button } from "react-native";
import { themes } from "./theme/ThemeContext";
import ThemeButton from "./components/ThemeButton";

import HomePage from "./components/HomePage";

//!! set up provider and consumer

// get theme provider working and add button to switch between themes.
// Then add fade in and out of each shadow button (with icon) - switch between sun and moon.

// style buttons and background better - also settle on style
// that many components actually needed?
// need sqlite for on device storage? no need for anything more fanciful. decide on that.

// decide on mvp functionality

const MyContext = React.createContext();
class MyProvider extends React.Component {
  state = {
    theme: themes.dark
  };
  render() {
    console.log(this.state.theme);
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          changeTheme: () =>
            this.setState({
              theme:
                this.state.theme === themes.dark ? themes.light : themes.dark
            })
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default class App extends React.Component {
  state = {};

  render() {
    return (
      <MyProvider>
        <MyContext.Consumer>
          {context => (
            <>
              <View style={context.state.theme}>
                <HomePage />
                <Button onPress={context.changeTheme} title="change theme" />
              </View>
            </>
          )}
        </MyContext.Consumer>
      </MyProvider>
    );
  }

  styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }
  });
}
