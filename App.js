import * as React from "react";
import { StyleSheet, View, Button, Text, ScrollView } from "react-native";
import { MyProvider, MyContext } from "./theme/ThemeContext";
import Icon from "react-native-vector-icons/FontAwesome5";
import ThemeButton from "./components/ThemeButton";

import HomeNav from "./components/HomeNav";

// decide on mvp functionality - that many components actually needed?
// upgrade / do whatever needed to be able to use new react navigation

// Add fade in and out of each shadow button (with icon) - switch between sun and moon.
// Add navigation to each page.

// style buttons and background better - also begin creating style themes so a user can
// cycle through many quality themes.

// need sqlite for on device storage? (can store current theme as well as data)
// no need for anything more fanciful. decide on that.

export default class App extends React.Component {
  state = {};

  render() {
    return (
      <MyProvider>
        <MyContext.Consumer>
          {context => (
            <>
              <ScrollView
                contentContainerStyle={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  ...context.state.theme
                }}
              >
                <HomeNav />
                <Icon.Button
                  name="suse"
                  backgroundColor="#3b5998"
                  onPress={context.changeTheme}
                >
                  Theme Swapper
                </Icon.Button>
              </ScrollView>
            </>
          )}
        </MyContext.Consumer>
      </MyProvider>
    );
  }
}

const styles = StyleSheet.create({
  themeButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
