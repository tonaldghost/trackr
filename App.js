import * as React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { MyProvider, MyContext } from "./theme/ThemeContext";
import Icon from "react-native-vector-icons/FontAwesome5";

import HomeNav from "./screens/HomeNav";

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
                <Button
                  style={{ ...context.state.button }}
                  type="clear"
                  onPress={context.changeTheme}
                  title="THEME SWAPPER"
                />
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
