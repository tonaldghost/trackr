import React, { Component } from "react";
import { Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;

export const themes = {
  light: {
    background: "#eeeeee",
    color: "#000000"
  },
  dark: {
    backgroundColor: "#222222",
    color: "#ffffff"
  }
};

export const MyContext = React.createContext();

export class MyProvider extends React.Component {
  state = {
    theme: themes.dark
  };
  render() {
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
