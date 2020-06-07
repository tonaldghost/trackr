import React from "react";
import { StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";

import HomeNav from "../components/HomeNav";

import { MyProvider, MyContext } from "../theme/ThemeContext";

export default function HomeScreen() {
  return (
    <>
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
              <TouchableOpacity
                style={{ ...context.state.button, ...styles.themeSwapper }}
                onPress={context.changeTheme}
              >
                <Text style={{ ...context.state.text, fontSize: 16 }}>
                  theme swapper
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </>
        )}
      </MyContext.Consumer>
    </>
  );
}

const styles = StyleSheet.create({
  themeSwapper: {
    position: "absolute",
    bottom: 24,
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 38
  }
});
